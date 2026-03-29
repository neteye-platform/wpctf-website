<template>
  <pre id="fire-animation" class="absolute left-0 -bottom-[13rem] w-full h-full opacity-40 z-10"></pre>
</template>

<script setup>
import { run } from '/src/modules/run.js'
import * as animation from '/src/modules/fireAnimation.js'
import { onMounted } from "vue";
import { useCheckDevice } from '@/stores/device';

const deviceType = useCheckDevice();

onMounted(() => {
  if(!deviceType.isMobile) {
    run(animation, { element: document.querySelector('#fire-animation') });
  }
})

</script>

<style lang="postcss">

</style>