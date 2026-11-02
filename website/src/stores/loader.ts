import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoader = defineStore('loader', () => {
  const isLoading = ref(false)
  return { isLoading }
})
