<template>
    <div class="publish-travelogue page-container">
      <h2 class="page-title">发布游记</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-item">
          <label>标题</label>
          <input v-model="form.title" placeholder="请输入游记标题">
        </div>
        <div class="form-item">
          <label>封面图片</label>
          <input type="file" @change="handleImageUpload">
        </div>
        <div class="form-item">
          <label>内容</label>
          <textarea v-model="form.content" placeholder="请输入游记内容"></textarea>
        </div>
        <button type="submit">发布</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const form = ref({
    title: '',
    content: '',
    coverImage: null
  })
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    // 处理图片上传
  }
  
  const handleSubmit = async () => {
    // 处理表单提交
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
  
  input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  textarea {
    height: 200px;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background: #1890ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>