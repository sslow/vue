<template>
  <header>
    <div class="collapse" @click="changeCollapse">
      <i class="el-icon-menu"></i>
    </div>
    <div class="header-logo">
        后台管理平台
    </div>
    <div class="header-right">
      <div class="header-user-con">
      <!--     <div class="fullscreen-btn">
            <i class="el-icon-rank"></i>
          </div>
          <div class="header-message">
             <i class="el-icon-bell"></i>
          </div> -->
          <div class="header-avator">
              <img class="logo" src="https://img3.doubanio.com/f/shire/8cff6c7f0bfa5a9dbe604b51f4de62f655c233ce/pics/ic_verify@2x.png" alt="" width="25" height="25">
          </div>
          <div class="header-user">
            Admin
          </div>
        
      </div>
      
   
    </div>
  </header>
</template>

<script>

export default {
  data () {
    return {
      collapse:false
    }
  },
  methods:{
    changeCollapse(){
      this.collapse = !this.collapse
      bus.$emit('collapse',this.collapse);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{height:70px;line-height: 70px;background: #fff;border:1px solid #e3e3e3;padding:0 25px;box-sizing:border-box}
[class^=el-icon-]{transform: scale(1.5);}
.collapse i{float: left;line-height: 70px;margin-right:20px;cursor: pointer}
.header-logo{font-size:24px;font-weight:bold;line-height: 70px;display: inline-block;}
.header-right{float:right;}
.header-user-con{display: flex;height:70px;align-items: center}
.fullscreen-btn,.header-message,.header-avator{
  width:50px;
  text-align: center;
}
.header-avator{
  margin-bottom:-5px;
}
</style>

