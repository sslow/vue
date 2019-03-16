<template>
  <div class="dashboard">
    <div>
      <div class="user box mb20">
        <div class="user-left">
          <img  src="https://img3.doubanio.com/f/shire/8cff6c7f0bfa5a9dbe604b51f4de62f655c233ce/pics/ic_verify@2x.png" alt="">
          <h2>Admin</h2>
        </div>
        <div class="user-right">
          <p>上次登陆：2019-12-12</p>
          <p>登陆地点：美国</p>
          <p>登陆次数：123</p>
        </div>
      </div>
      <div class="language box">
        <div class="language-top">
          <span class="title">网站编写语言构成</span>
        </div>
        <div class="language-bottom">
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="3.7"></el-progress>
          HTML
          <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
        </div>
      </div>
      <div class="language box">
        <div class="language-top">
          <span class="title">待完成事项</span>
        </div>
        <div class="language-bottom">
          深圳住房署
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          节日安排事项
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          周末陪护组织
          <el-progress :percentage="3.7"></el-progress>
          义工绿化项目
          <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
        </div>
      </div>
    </div>
    <div class="todo-container box">
      <h2>todos</h2>
      <div class="todo-main">
        <div class="todo-top">
          <i class="el-icon-arrow-down"></i><input v-model="newTodo" type="text" placeholder="todo.." @keyup.enter="addTodo()">
        </div>
        <div class="todo-bottom">
          <ul>
            <li v-for="(item,index) in filteredTodos" :class="{completedClass:item.completed}"><input  v-model="item.completed" type="checkbox"> <label> {{item.title}} </label><i class="el-icon-close" @click="removeTodo(index)"></i></li>
          </ul>
        </div>
      </div>
      <div class="operate-bar"><span :class="{selected:currentKey=='all'}" @click="currentKey='all'">all</span><span :class="{selected:currentKey=='completed'}"  @click="currentKey='completed'"> completed</span><span :class="{selected:currentKey=='active'}"  @click="currentKey='active'">active </span> </div>
    </div>
  </div>
</template>
<script>
import { Store } from '@/assets/js/store'

const filter = {
  all(todos) {
    return todos;
  },
  completed(todos) {
    return todos.filter(function(item, index, arr) {
      return item.completed
    })
  },
  active(todos) {
    return todos.filter(function(item, index, arr) {
      return !item.completed
    })
  }
}
export default {
  data() {
    return {
      STORE_KEY: 'todo',
      todos: [],
      newTodo: '',
      currentKey:'all',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    todos: {
      handler() {
        Store.save(this.todos, this.STORE_KEY);
      }
    }
  },
  methods: {
    addTodo() {

      const title  = this.newTodo.trim()
      if(!title){
          return false;
      }
      this.todos.push({ title: title })
      this.newTodo = '';
      this.currentKey = 'all'
    },
    removeTodo(index){
        this.todos.splice(index,1)
    }
  },
  computed: {
    filteredTodos() {
      return filter[this.currentKey](this.todos)
    }
  },
  created() {
    this.todos = Store.get(this.STORE_KEY);
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  color: #909399;
  font-size: 18px;
  padding: 10px;
  display: flex
}

.box {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
  background: #fff;
  margin: 10px;
}

.user-left,
.user-right {
  display: inline-block;
  vertical-align: middle
}

.user-left {
  line-height: 50px;
  vertical-align: middle;
  border-right: 2px solid #155e8c;
  padding-right: 20px;
}

.user-right {
  text-align: left;
  padding-left: 20px;
  line-height: 2em;
}

.title {
  color: #155e8c
}

.language-top {
  line-height: 50px;
  border-bottom: 2px solid #155e8c;
  padding-bottom: 20px;
}

.language-bottom {
  width: 100%;
  padding-top: 20px;
}

.card {
  height: 80px;
  padding: 0;
  height: 100%;
}

.card>div {
  display: inline-block;
}

.card-right {
  width: 70%;
  background: #fff
}

.todo-container {
  width: 30%;
  padding-bottom:60px;
  min-width: 400px
}

.todo-top {
  line-height: 40px;
  border-bottom: 1px solid #155e8c;
  position: relative;
  padding-left: 40px;
}

.todo-top input {
  line-height: 30px;
  width: 100%;
  box-sizing: border-box;

}

.el-icon-arrow-down {
  position: absolute;
  left: 10px;
  top: 12px;
}

.todo-container{
  position: relative;
}

.todo-bottom {
  max-height:500px;
  overflow: auto;
}
.todo-bottom li {
  line-height: 2em;
  border-bottom: 1px solid #e3e3e3;
}

.todo-bottom li i {
  float: right;
  margin-top: 8px;
}
.todo-bottom li input[type=checkbox]{display: inline-block;vertical-align: middle;}
.todo-bottom li label{
  display: inline-block;
  width:90%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
.todo-bottom li.completedClass label {
  text-decoration: line-through;
  
}

.operate-bar{position: absolute;bottom:0;padding:20px 0;}
.operate-bar span{display: inline-block;margin-right:20px;cursor: pointer }
.operate-bar span.selected{border-bottom:2px solid #155e8c;}


.todo-bottom>ul::-webkit-scrollbar-track{border-radius: 3px;background-color: #ffffff;}
.todo-bottom>ul::-webkit-scrollbar{width: 5px; height:5px; background-color: #ffffff;}
.todo-bottom>ul::-webkit-scrollbar-thumb{border-radius: 3px;background-color: #b0b6bc; }
.todo-bottom>ul::-webkit-scrollbar-track  { display: none; }
</style>
