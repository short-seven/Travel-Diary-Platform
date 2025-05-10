import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
    role: localStorage.getItem('userRole') || ''
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token,
    isAdmin: (state) => state.role === 'admin'
  },
  
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
      this.token = userInfo.token
      this.role = userInfo.role
      localStorage.setItem('token', userInfo.token)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('userRole', userInfo.role)
    },
    
    logout() {
      this.userInfo = {}
      this.token = ''
      this.role = ''
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('userRole')
    }
  }
})
