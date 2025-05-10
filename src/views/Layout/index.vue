<template>
  <div class="layout">
    <router-view></router-view>
    <BottomNav />
  </div>
</template>

<script setup>
import BottomNav from '@/components/common/BottomNav.vue'
</script>

<style scoped>
.layout {
  padding-bottom: 60px;
}
</style>