import Vue from 'vue'
import Router from 'vue-router'
// 主页路由
import index from '@/views/public/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
