import { defineStore } from 'pinia'

export const useTravelogueStore = defineStore('travelogue', {
  state: () => ({
    travelogues: [],
    currentTravelogue: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchTravelogues() {
      this.loading = true
      try {
        // 这里添加获取游记列表的 API 调用
        // const response = await api.getTravelogues()
        // this.travelogues = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    async fetchTravelogueById(id) {
      this.loading = true
      try {
        // 这里添加获取单个游记详情的 API 调用
        // const response = await api.getTravelogueById(id)
        // this.currentTravelogue = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    async createTravelogue(travelogueData) {
      this.loading = true
      try {
        // 这里添加创建游记的 API 调用
        // const response = await api.createTravelogue(travelogueData)
        // this.travelogues.push(response.data)
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
})

