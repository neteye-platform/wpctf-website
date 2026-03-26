<template>
  <span v-if="isRedacted" :data-redacted="props.data">[REDACTED]</span>
  <span v-else>{{ props.data }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: String,
    default: ''
  }
})

const isRedacted = computed(() => {
  const redactedUntil = new Date('2025-07-14T00:00:00Z')
  const currentDate = new Date()
  return currentDate < redactedUntil
})
</script>
