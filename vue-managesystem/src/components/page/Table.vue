<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-location"></i> 基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
		<h2>深圳住房署配租提请列表</h2>
        <el-button type="danger" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
        <el-button type="success" class="handle-del mr10" @click="add()">添加</el-button>
        <el-select v-model="select_cate" placeholder="筛选区域" class="handle-select mr10">
          <el-option key="1" label="罗湖区" value="罗湖区" ></el-option>
          <el-option key="2" label="龙岗区" value="龙岗区" ></el-option>
          <el-option key="3" label="宝安区" value="宝安区" ></el-option>
          <el-option key="4" label="盐田区" value="盐田区" ></el-option>
          <el-option key="5" label="福田区" value="福田区" ></el-option>
        </el-select>
        <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
      </div>
      <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange()">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="dateStart" label="认租时间" sortable >
        </el-table-column>
        <el-table-column prop="name" label="配租名称" >
        </el-table-column>
        <el-table-column prop="region" label="配租区域" width="120" >
        </el-table-column>
        <el-table-column prop="districtRestrict" label="配租权限" width="120" >
        </el-table-column>
        <el-table-column prop="type" label="配租房型" >
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="data.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { Store } from '@/assets/js/store'
export default {
  data() {
    return {
      data:[],
      select_cate:'',
      select_word:'',
      formatter:''
    }
  },
  watch:{
  	data:{
  		handler(){
  			Store.save(this.data);
  		},
  		deep:true
  	}
  },
  computed:{
  	filterData(type){

  	}
  },
  methods:{
  	handleSelectionChange(){

  	},
  	handleCurrentChange(){

  	},
  	handleDelete(i,event){
  		this.data.splice(i,1);
  	},
  	handleEdit(i,event){
  		router.push({name:'form',query:Object.assign({},event,{'index':i})});
  	},
  	search(){

  	},
  	delAll(){
  		this.data=[];
  	},
  	add(){
  		router.push('form');
  	}
  },
  filters:{
  	DateFormat(timeStamp){
  		var date = new Date();
  		return date.setTime(timeStamp).toLocaleDateString();
  	}
  },
  created(){
  	 this.data= Store.get();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-side {
  float: left
}
.handle-input{width:300px;}
.container{
	padding-top:20px;
}

</style>
