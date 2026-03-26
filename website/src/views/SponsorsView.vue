<template>
  <CookieBanner />
  <SectionSponsors />
</template>

<script setup lang="ts">
import CookieBanner from '@/components/CookieBanner.vue'
import { onMounted, watch } from 'vue'
import TrackingService from '@/TrackingService/TrackingService'
import SectionSponsors from '@/components/SectionSponsors.vue'

onMounted(() => {
  TrackingService.trackPage()
})
</script>
