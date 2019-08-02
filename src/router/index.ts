import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/mis/workspace/Index.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'default',
    redirect: '/login',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mis',
    name: 'mis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "miscontainer" */ '@/views/mis/MisContainer.vue'),
    children: [
      { path: 'index', name: 'index', component: () => import(/* webpackChunkName: "misindex" */'@/views/mis/workspace/Index.vue') },
      { path: 'syspage1', name: 'syspage1', component: () => import(/* webpackChunkName: "syspage1" */'@/views/mis/sys/SysPage1.vue') },
      { path: 'syspage2', name: 'syspage2', component: () => import(/* webpackChunkName: "syspage2" */'@/views/mis/sys/SysPage2.vue') },
      { path: 'syspage3', name: 'syspage3', component: () => import(/* webpackChunkName: "syspage3" */'@/views/mis/sys/SysPage3.vue') },
      { path: 'usercenter', name: 'usercenter', component: () => import(/* webpackChunkName: "usercenter" */'@/views/mis/set/UserCenter.vue') },
      { path: 'usersetting', name: 'usersetting', component: () => import(/* webpackChunkName: "usersetting" */'@/views/mis/set/UserSetting.vue') },
      { path: 'notfound', name: 'notfound', component: () => import(/* webpackChunkName: "notfound" */'@/views/mis/exception/NotFound.vue') }
    ]
  },
  {
    path: '*',
    redirect: '/mis/notfound'
  }
  ]
})
