<template>
  <div class="my-travelogues page-container">
    <h2 class="page-title">我的游记</h2>
    <div class="travelogue-item" v-for="item in myTravelogues" :key="item.id">
      <img :src="item.coverImage" :alt="item.title">
      <div class="content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <div class="meta">
          <span>{{ item.createTime }}</span>
          <span>{{ item.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const myTravelogues = ref([])

onMounted(async () => {
  // 这里添加获取我的游记列表的逻辑
})
</script>

<style scoped>
.travelogue-item {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.travelogue-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.content {
  margin-top: 12px;
}

.meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
  margin-top: 8px;
}
</style>