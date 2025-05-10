<template>
  <div class="my-travelogues page-container">
    <div class="header">
      <h2 class="page-title">我的游记</h2>
      <button class="logout-btn" @click="handleLogout">退出登录</button>
    </div>
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
    <div v-if="myTravelogues.length === 0" class="empty-state">
      <p>暂无游记，快去发布吧！</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const myTravelogues = ref([])

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}

onMounted(async () => {
  // 这里添加获取我的游记列表的逻辑
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-title {
  margin: 0;
}

.logout-btn {
  padding: 8px 16px;
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.logout-btn:hover {
  background: #ff7875;
}

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

.empty-state {
  text-align: center;
  padding: 40px 0;
  color: #999;
}
</style>