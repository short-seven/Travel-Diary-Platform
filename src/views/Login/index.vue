<template>
  <div class="login page-container">
    <h2 class="page-title">登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-item">
        <label>用户名</label>
        <input v-model="form.username" placeholder="请输入用户名">
      </div>
      <div class="form-item">
        <label>密码</label>
        <input type="password" v-model="form.password" placeholder="请输入密码">
      </div>
      <button type="submit">登录</button>
      <p class="register-link" @click="goToRegister">还没有账号？立即注册</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const form = ref({
  username: '',
  password: ''
})

const handleLogin = async () => {
  // 这里添加登录逻辑
  if (userStore.role === 'admin') {
    router.push('/admin/review')
  } else {
    router.push('/my-travelogues')
  }
}

const goToRegister = () => {
  // 跳转到注册页面
}
</script>

<style scoped>
.form-item {
  margin-bottom: 16px;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 12px;
  background: #1890ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
}

.register-link {
  text-align: center;
  color: #1890ff;
  cursor: pointer;
}
</style>