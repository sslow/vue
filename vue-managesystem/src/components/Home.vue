<template>
  <div id="controller-wrap">
    <c-header></c-header>

      <div class="left-side">
          <c-sidebar></c-sidebar>
      </div>
      <div class="right-con" :class="{collapseClass:isCollapse}">
        <c-tags></c-tags>
        <div class="base-content">
          <router-view>
          
          </router-view>
        </div>

    </div>
   
    
  </div>
</template>

<script>
import CHeader from './common/Header.vue'
import CSidebar from './common/Sidebar.vue'
import CTags from './common/Tags.vue'
export default {
  components:{CHeader,CSidebar,CTags},
  name: 'Home',

  data () {
    return {
      isCollapse:false
    }
  },
  created(){
    bus.$on('collapse',param=>this.isCollapse = param)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-side{position:absolute;left:0;top:70px;bottom:0;border-left:1px solid #e3e3e3;}
.left-side ul{height:100%;}
.content{background: #e3e3e3;margin-top:3px;position: relative;}

.right-con{position: absolute;left:250px;top:70px;right:0;bottom:0;overflow: auto;background: #ededed;margin:5px;}
.right-con.collapseClass{left:66px;}
.base-content{border-radius: 5px;}
</style>
