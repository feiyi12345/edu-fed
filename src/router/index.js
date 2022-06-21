import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  {
    path: '/',
    meta: { title: '导航' },
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index'),
    children: [
      {
        path: '',
        name: 'home',
        meta: { title: 'home' },
        component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
      },
      {
        path: '/advert',
        name: 'advert',
        meta: { title: '广告' },
        component: () => import(/* webpackChunkName: 'advert' */'@/views/advert/index')
      },
      {
        path: '/course',
        name: 'course',
        meta: { title: '课程' },
        component: () => import(/* webpackChunkName: 'course' */'@/views/course/index')
      },
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
      },
      {
        path: '/menu',
        name: 'menu',
        meta: { title: '菜单' },
        component: () => import(/* webpackChunkName: 'menu' */'@/views/menu/index')
      },
      {
        path: '/menu/create',
        name: 'CreateIndex',
        component: () => import(/* webpackChunkName: 'error' */'@/views/menu/create')
      },
      {
        path: '/resource',
        name: 'resource',
        meta: { title: '资源' },
        component: () => import(/* webpackChunkName: 'resource' */'@/views/resource/index')
      },
      {
        path: '/role',
        name: 'role',
        meta: { title: '角色' },
        component: () => import(/* webpackChunkName: 'role' */'@/views/role/index')
      },
      {
        path: '/user',
        name: 'user',
        meta: { title: '用户' },
        component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
      }
    ]
  },
  {
    path: '*',
    name: 'error_page',
    component: () => import(/* webpackChunkName: 'error' */'@/views/error_page/index')
  }
]
const router = new VueRouter({ routes })
export default router
