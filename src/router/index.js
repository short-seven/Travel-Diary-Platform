//createRouter:创建router实例对象
//createWebHistory:创建history模式

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'
import TraveloguesList from '@/views/Travelogues List/index.vue'
import PublishTravelogues from '@/views/Publish Travelogue/index.vue'
import MyTravelogues from '@/views/My Travelogues/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系
  routes: [
{
  path:"/",
  component:layout,
  children:[
    {
      path:"",
      component:TraveloguesList
    },
    {
      path:"PublishTravelogues",
      component:PublishTravelogues
    },
    {
      path:"MyTravelogues",
      component:MyTravelogues
    }
  ]
},
{
  path:"/login",
  component:Login
}
  ]
})

export default router
