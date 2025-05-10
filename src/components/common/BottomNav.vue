<!-- src/components/common/BottomNav.vue -->
<template>
  <div class="bottom-nav">
    <router-link to="/travelogues" class="nav-item" :class="{ active: $route.path === '/travelogues' }">
      <IconList />
      <span>游记列表</span>
    </router-link>
    <router-link to="/publish" class="nav-item" :class="{ active: $route.path === '/publish' }">
      <IconPublish />
      <span>发布游记</span>
    </router-link>
    <router-link to="/my-travelogues" class="nav-item" :class="{ active: $route.path === '/my-travelogues' }">
      <IconUser />
      <span>我的游记</span>
    </router-link>
  </div>
</template>

<script setup>
import IconList from '@/components/icons/IconList.vue'
import IconPublish from '@/components/icons/IconPublish.vue'
import IconUser from '@/components/icons/IconUser.vue'
</script>
  
  <style scoped>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    text-decoration: none;
  }
  
  .nav-item.active {
    color: #1890ff;
  }
  </style>