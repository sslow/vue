<template>
  <div class="tag-bar">
    <ul>
      <li  class="tag"  :class="{selected:currentTag==tag.name}" v-for="(tag, index) in tags" :index="index" :Key="index">
        {{tag.title}}
        <span class="del-btn"  @click="closeTag(index)">㐅</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

  data() {
    return {
      tags: [],
      currentTag:''
    }
  },
  watch: {
    '$route'(to, from) {
      this.setTag(to);
    }
  },
  methods: {
    setTag(route){
        var isExist= this.tags.some((item,index,arr)=>{
            return item.path==route.fullPath
        });
        if(!isExist){
          if(this.tags.length>5){
            this.tags.shift();
          }

          this.tags.push({
            path:route.fullPath,
            title:route.meta.title,
            name:route.name
          });
          this.currentTag = route.name
        }
    },
    closeTag(index){
      const deleteItem = this.tags.splice(index,1)[0];
      const item = this.tags[index]?this.tags[index]:this.tags[index-1];
      if(item){
          this.$router.fullPath==deleteItem.path&&this.$router.push(item.path)
      }else{
          this.$router.push('/')
      }
    }
  },
  created(){
    this.setTag(this.$route)
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tag {
  display: inline-block;
  border: 1px solid #333;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 12px;
}

.tag.selected{
    border:2px solid #409EFF
}

.del-btn {
  background: #f5f7f9;
  cursor: pointer;
  margin-left: 2px;
}
.tag-bar{background: #fff;padding-bottom:5px;}

</style>
