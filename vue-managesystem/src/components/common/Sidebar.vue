<template>
<el-menu class="sidemenu" :collapse="isCollapse" router unique-opened>
  <template v-for="item in menuItems">
     <template v-if="item.subs">
        <el-submenu :index="item.index">
          <template v-slot:title>
            <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
          </template>
          
          <template v-for="subItem in item.subs">
                  <el-submenu  v-if="subItem.subs" :index="subItem.index">
                    <span slot="title">{{subItem.title}}</span>
                      <template v-for="miniItem in subItem.subs">
                           <el-menu-item :index="miniItem.index">
                             {{miniItem.title}}
                           </el-menu-item>
                      </template>
                  </el-submenu>
               <template v-else>
                 <el-menu-item :index="subItem.index">
                   {{subItem.title}}
                 </el-menu-item>
               </template>
          </template>
         
        </el-submenu>
     </template>
     <template v-else>
       <el-menu-item :index="item.index">
        <i :class="item.icon"></i><span slot="title" >{{item.title}}</span>
       </el-menu-item>
     </template>
  </template>
</el-menu>

</template>

<script>

export default {
  data () {
    return {
      isCollapse:false,
      menuItems: [
                    {
                        icon: 'el-icon-star-on',
                        index: 'dashboard',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-location',
                        index: 'table',
                        title: '基础表格'
                    },
                    // {
                    //     icon: 'el-icon-info',
                    //     index: 'tabs',
                    //     title: 'tab选项卡'
                    // },
                    {
                        icon: 'el-icon-service',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            // {
                            //     index: '3-2',
                            //     title: '三级菜单',
                            //     subs: [
                            //         {
                            //             index: 'editor',
                            //             title: '富文本编辑器'
                            //         },
                            //         {
                            //             index: 'markdown',
                            //             title: 'markdown编辑器'
                            //         },
                            //     ]
                            // },
                            // {
                            //     index: 'upload',
                            //     title: '文件上传'
                            // }
                        ]
                    },
                    // {
                    //     icon: 'el-icon-setting',
                    //     index: 'icon',
                    //     title: '自定义图标'
                    // },
                    {
                        icon: 'el-icon-refresh',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    // {
                    //     icon: 'el-icon-view',
                    //     index: '6',
                    //     title: '拖拽组件',
                    //     subs: [
                    //         {
                    //             index: 'drag',
                    //             title: '拖拽列表',
                    //         },
                    //         {
                    //             index: 'dialog',
                    //             title: '拖拽弹框',
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-warning',
                    //     index: '7',
                    //     title: '错误处理',
                    //     subs: [
                    //         {
                    //             index: 'permission',
                    //             title: '权限测试'
                    //         },
                    //         {
                    //             index: '404',
                    //             title: '404页面'
                    //         }
                    //     ]
                    // }
                ]
    }
  },
  computed:{
        activeIndex(){
          return this.$route.path.replace('/');
        }
  },
  created(){
    bus.$on('collapse',param=>{
        this.isCollapse = param
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.sidemenu:not(.el-menu--collapse){
  width:250px;
}

.sidemenu li{margin:0;padding:0;display: block;}
.sidemenu> ul{height:100%;}
</style>
