<template>
  <div class="form">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-service"></i> 表单</el-breadcrumb-item>
        <el-breadcrumb-item>基本表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="event-form-container">
      <h2>深圳住房保障署配租提请表</h2>
      <el-form ref="form" :rule="rules" :model="form" label-width="80px">
        <el-form-item label="配租名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="配租区域" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="龙岗区" value="龙岗区"></el-option>
            <el-option label="福田区" value="福田区"></el-option>
            <el-option label="宝安区" value="宝安区"></el-option>
            <el-option label="盐田区" value="盐田区"></el-option>
            <el-option label="罗湖区" value="罗湖区"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="认租时间" prop="dateStart">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.dateStart" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="社保缴纳">
          <el-switch v-model="form.socialSecurity"></el-switch>
        </el-form-item>
        <el-form-item label="供应房型" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="单房" name="type"></el-checkbox>
            <el-checkbox label="一房一厅" name="type"></el-checkbox>
            <el-checkbox label="两房一厅" name="type"></el-checkbox>
            <el-checkbox label="三房一厅" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="申请区域" prop="districtRestrict">
          <el-radio-group v-model="form.districtRestrict">
            <el-radio label="本区"></el-radio>
            <el-radio label="全市"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="申请须知" prop="desc">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>

          <el-button v-show="!isCreate" type="primary" @click="onDoneEdit">确认</el-button>
          <el-button v-show="isCreate" :plain="true" @click="onSubmit" >立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Store } from '@/assets/js/store'
export default {
  data() {
    return {
      eventList: [],
      isCreate:true,
      form: {
        name: '',
        region: '',
        dateStart: '',
        socialSecurity: false,
        type: [],
        districtRestrict: '',
        desc: '',
        id:Date.now() + ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        dateStart: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个房源类型', trigger: 'change' }
        ],
        districtRestrict: [
          { required: true, message: '请选择可申请人户口区域', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写须知内容', trigger: 'blur' }
        ]
      },
    }
  },
  watch:{
    eventList:{
      handler(){
        Store.save(this.eventList);
      },
      deep:true
    }
  },
  methods: {
    onSubmit() {
      this.eventList.push(this.form)
      this.$message({
        message: '创建配租活动成功！',
        type: 'success',
        showClose: true,
      });
    },
    onDoneEdit(){
      this.eventList.splice(this.form.index,1,this.form)
        this.$message({
        message: '修改成功！',
        type: 'success',
        showClose: true
      });
      router.go(-1);
    }
  },
  created() {
    if(this.$route.query.name){
      this.form = this.$route.query
      this.isCreate = false;
    }
    this.eventList = Store.get()
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-form-container {
  padding: 50px;
  width:60%;
  background: #ecf5ff;
  border-radius:5px;
  margin:0 auto;

}

</style>
