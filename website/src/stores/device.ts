import { defineStore } from 'pinia'
import { isMobile } from 'mobile-device-detect';

export const useCheckDevice = defineStore('deviceType', () => {
  return { isMobile }
})
