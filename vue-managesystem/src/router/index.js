import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../components/Home.vue'], resolve),
      children: [{
        path: '/dashboard',
        name:'dashboard',
        component: resolve => require(['@/components/page/Dashboard.vue'], resolve),
        meta: { title: 'dashboard' }
      },
      {
        path: '/charts',
        name:'charts',
        component: resolve => require(['@/components/page/Charts.vue'], resolve),
        meta: { title: '图表' }
      },
      {
        path: '/form',
        name:'form',
        component: resolve => require(['@/components/page/Form.vue'], resolve),
        meta: { title: '表单' }
      },
       {
        path: '/table',
        name:'table',
        component: resolve => require(['@/components/page/Table.vue'], resolve),
        meta: { title: '表格' }
      }
      ]
    }
  ]
})
