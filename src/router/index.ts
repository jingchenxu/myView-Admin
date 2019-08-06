import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/mis/workspace/Index.vue'
import Login from '@/views/Login.vue'
import { LoadingBar } from 'iview'
import store from '../store'

Vue.use(Router)

const router:Router = new Router({
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
      { path: 'index', name: 'index', component: () => import('@/views/mis/workspace/Index.vue') },
      { path: 'workspace', name: 'workspace', component: () => import('@/views/mis/workspace/WorkSpace.vue') },
      { path: 'monitor', name: 'monitor', component: () => import('@/views/mis/workspace/Monitor.vue') },
      { path: 'syspage1', name: 'syspage1', component: () => import('@/views/mis/sys/SysPage1.vue') },
      { path: 'syspage2', name: 'syspage2', component: () => import('@/views/mis/sys/SysPage2.vue') },
      { path: 'syspage3', name: 'syspage3', component: () => import('@/views/mis/sys/SysPage3.vue') },
      { path: 'usercenter', name: 'usercenter', component: () => import('@/views/mis/set/UserCenter.vue') },
      { path: 'usersetting', name: 'usersetting', component: () => import('@/views/mis/set/UserSetting.vue') },
      { path: 'notfound', name: 'notfound', component: () => import('@/views/mis/exception/NotFound.vue') },
      { path: 'basedetail', name: 'basedetail', component: () => import('@/views/mis/det/BaseDetail.vue')},
      { path: 'advancedetail', name: 'advancedetail', component: () => import('@/views/mis/det/AdvanceDetail.vue')},
    ]
  },
  {
    path: '*',
    redirect: '/mis/notfound'
  }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('LOADINGSTART')
  LoadingBar.start()
  setTimeout(next, 1000)
}) 

router.afterEach((to) => {
  store.dispatch('LOADINGFINISHED')
  LoadingBar.finish()
})

export default router

//# sourceMappingURL=index.js.map
