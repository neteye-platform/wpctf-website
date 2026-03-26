<template>
  <div
    v-if="!props.mobile"
    class="relative text-nowrap text-lowcontrast-grey text-2xl xl:text-xl left-[45%] -translate-x-1/2"
  >
    ___________________________________{{ props.word }}___________________________________{{
      props.word
    }}___________________________________{{ props.word }}___________________________________{{
      props.word
    }}___________________________________{{ props.word }}___________________________________{{
      props.word
    }}___________________________________{{ props.word }}___________________________________
  </div>
  <div
    v-else
    class="flex justify-center overflow-hidden text-nowrap text-lowcontrast-grey text-2xl xl:text-xl"
  >
    <span class="flex">
      ______________________________________________________________________________________________________________________________________________________________________________________{{
        props.word
      }}______________________________________________________________________________________________________________________________________________________________________________________
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  word: {
    type: String,
    default: 'WP_CTF_2025'
  },
  mobile: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped></style>
