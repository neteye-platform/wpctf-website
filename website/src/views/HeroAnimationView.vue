<template>
  <pre id="ascii-animation" class="fixed -top-[10vh] left-0 w-full h-[120vh] opacity-30 -z-10"></pre>
</template>

<script setup>

import { run } from '/src/modules/run.js'
import * as animation from '/src/modules/asciiAnimation.js'
import { onMounted } from "vue";
import { useCheckDevice } from '@/stores/device';

const deviceType = useCheckDevice();

onMounted(() => {
  if(!deviceType.isMobile) {
    run(animation, { element : document.querySelector('#ascii-animation') });
  }
})

</script>

<style lang="postcss" scoped>

</style>
