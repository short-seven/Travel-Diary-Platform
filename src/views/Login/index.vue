<template>
  <div class="login page-container">
    <h2 class="page-title">{{ isRegister ? '注册' : '登录' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-item">
        <label>用户名</label>
        <input 
          v-model="form.username" 
          placeholder="请输入用户名"
          :disabled="loading"
        >
      </div>
      <div class="form-item">
        <label>密码</label>
        <input 
          type="password" 
          v-model="form.password" 
          placeholder="请输入密码"
          :disabled="loading"
        >
      </div>
      <div class="form-item" v-if="isRegister">
        <label>确认密码</label>
        <input 
          type="password" 
          v-model="form.confirmPassword" 
          placeholder="请再次输入密码"
          :disabled="loading"
        >
      </div>
      <button type="button" @click="handleSubmit" :disabled="loading">
        {{ loading ? (isRegister ? '注册中...' : '登录中...') : (isRegister ? '注册' : '登录') }}
      </button>
      <p class="register-link" @click="toggleMode">
        {{ isRegister ? '已有账号？立即登录' : '还没有账号？立即注册' }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const isRegister = ref(false)
const form = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

// 获取用户列表
const getUsers = () => {
  try {
    const users = localStorage.getItem('users')
    console.log('Current users:', users)
    return users ? JSON.parse(users) : []
  } catch (error) {
    console.error('Error getting users:', error)
    return []
  }
}

// 保存用户列表
const saveUsers = (users) => {
  try {
    localStorage.setItem('users', JSON.stringify(users))
    console.log('Saved users:', users)
  } catch (error) {
    console.error('Error saving users:', error)
  }
}

// 切换登录/注册模式
const toggleMode = () => {
  console.log('Toggling mode, current:', isRegister.value)
  isRegister.value = !isRegister.value
  form.value = {
    username: '',
    password: '',
    confirmPassword: ''
  }
}

// 统一处理提交
const handleSubmit = () => {
  console.log('Form submitted, isRegister:', isRegister.value)
  console.log('Form data:', form.value)
  
  if (isRegister.value) {
    handleRegister()
  } else {
    handleLogin()
  }
}

// 处理注册
const handleRegister = async () => {
  console.log('Handling register:', form.value)
  
  if (!form.value.username || !form.value.password || !form.value.confirmPassword) {
    alert('请填写完整信息')
    return
  }

  if (form.value.password !== form.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }

  loading.value = true
  try {
    const users = getUsers()
    console.log('Existing users:', users)
    
    // 检查用户名是否已存在
    if (users.some(user => user.username === form.value.username)) {
      alert('用户名已存在')
      return
    }

    // 添加新用户
    const newUser = {
      username: form.value.username,
      password: form.value.password,
      role: 'user'
    }
    users.push(newUser)
    console.log('Adding new user:', newUser)

    // 保存用户列表
    saveUsers(users)

    alert('注册成功')
    isRegister.value = false
    form.value = {
      username: '',
      password: '',
      confirmPassword: ''
    }
  } catch (error) {
    console.error('Register error:', error)
    alert('注册失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// 处理登录
const handleLogin = async () => {
  console.log('Handling login:', form.value)
  
  if (!form.value.username || !form.value.password) {
    alert('请输入用户名和密码')
    return
  }

  loading.value = true
  try {
    const users = getUsers()
    console.log('Checking users for login:', users)
    
    // 查找用户
    const user = users.find(
      u => u.username === form.value.username && u.password === form.value.password
    )

    if (user) {
      console.log('Login successful:', user)
      // 登录成功
      userStore.setUserInfo({
        token: 'mock-token',
        username: user.username,
        role: user.role
      })
      
      if (user.role === 'admin') {
        router.push('/admin/review')
      } else {
        router.push('/my-travelogues')
      }
    } else {
      alert('用户名或密码错误')
    }
  } catch (error) {
    console.error('Login error:', error)
    alert('登录失败，请稍后重试')
  } finally {
    loading.value = false
  }
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

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.register-link {
  text-align: center;
  color: #1890ff;
  cursor: pointer;
}
</style>