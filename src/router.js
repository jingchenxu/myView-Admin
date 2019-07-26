import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/mis/workspace/Index'
import Login from './views/Login'

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
    component: () => import(/* webpackChunkName: "about" */ './views/mis/MisContainer'),
    children: [
      { path: 'index', name: 'index', component: () => import('@/views/mis/workspace/Index') },
      { path: 'syspage1', name: 'syspage1', component: () => import('./views/mis/sys/SysPage1') },
      { path: 'syspage2', name: 'syspage2', component: () => import('@/views/mis/sys/SysPage2') }
    ]
  }
  ]
})
