//createRouter:创建router实例对象
//createWebHistory:创建history模式

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

  const routes = [
  //布局页面
    {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/travelogues'
      },
      //游记列表页面
      {
        path: '/travelogues',
        name: 'TraveloguesList',
        component: () => import('@/views/Travelogues List/index.vue')
      },
      //游记详情页面
      {
        path: '/travelogue/:id',
        name: 'TravelogueDetail',
        component: () => import('@/views/Travelogues List/index.vue')
      },
      //发布游记页面
      {
        path: '/publish',
        name: 'PublishTravelogue',
        component: () => import('@/views/Publish Travelogue/index.vue')
      },
      //我的游记页面
      {
        path: '/my-travelogues',
        name: 'MyTravelogues',
        component: () => import('@/views/My Travelogues/index.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  //登录页面
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
  //管理员审核页面
  {
    path: '/admin/review',
    name: 'AdminReview',
    component: () => import('@/views/My Travelogues/index.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresAdmin && userRole !== 'admin') {
    next('/my-travelogues')
  } else {
    next()
  }
})

export default router
