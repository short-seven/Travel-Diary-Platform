//createRouter:创建router实例对象
//createWebHistory:创建history模式

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/travelogues'
      },
      {
        path: '/travelogues',
        name: 'TraveloguesList',
        component: () => import('@/views/Travelogues List/index.vue')
      },
      {
        path: '/travelogue/:id',
        name: 'TravelogueDetail',
        component: () => import('@/views/Travelogues List/index.vue')
      },
      {
        path: '/publish',
        name: 'PublishTravelogue',
        component: () => import('@/views/Publish Travelogue/index.vue')
      },
      {
        path: '/my-travelogues',
        name: 'MyTravelogues',
        component: () => import('@/views/My Travelogues/index.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
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
