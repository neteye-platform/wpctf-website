<template>
  <pre id="registration-animation" class="absolute left-0 top-0 w-full h-full opacity-40 z-10"></pre>
</template>

<script setup>
import { run } from '/src/modules/run.js'
import * as animation from '/src/modules/cubeAnimation.js'
import { onMounted } from "vue";
import { useCheckDevice } from '@/stores/device';

const deviceType = useCheckDevice();

onMounted(() => {
  if(!deviceType.isMobile) {
    run(animation, { element: document.querySelector('#registration-animation') });
  }
})

</script>

<style lang="postcss">

</style>
