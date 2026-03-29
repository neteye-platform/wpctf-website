<template>
  <main class="relative flex flex-col items-center z-20 space-y-20 flicker !transition-all overflow-hidden min-h-full">
    <RouterView/>
    <NavFooter v-if="!['temp', 'hero', 'registration', 'fire'].includes(String($route.name))"/>
  </main>
</template>

<script lang="ts">
  export default {
    title: 'WP CTF 2024'
  }
</script>

<script setup lang="ts">
import NavFooter from "@/components/navigation/NavFooter.vue";
import { inject } from 'vue';
import { useCheckDevice } from '@/stores/device';
import { useRoute } from "vue-router";
const deviceType = useCheckDevice();

let tm: ReturnType<typeof setTimeout> | number | undefined = undefined;

const route = useRoute();

if(!['temp', 'hero', 'registration', 'fire'].includes(String(route.name))) {

  window.addEventListener('resize', () => {
    clearTimeout(tm);
    tm = setTimeout(() => {
      window.innerWidth < 1280
          ? deviceType.isMobile = true
          : deviceType.isMobile = false;

      setTimeout(() => {
        //@ts-ignore
        document.querySelectorAll('.animation-iframe').forEach((el: HTMLIFrameElement): void => {
          let src = el?.src;
          if(src) {
            el.src = src;
          }
        })
      })

    }, 200)
  })
  const emitter: any = inject('emitter');
  emitter.on('scrollTo', (target) => {   // *Listen* for event
    scrollPage(target);
  });

}

function scrollPage(target: string): void {
  const targetEl = document.querySelector(`[data-scroll="${ target }"]`);
  if (targetEl) {
    let offset = (window.scrollY + targetEl?.getBoundingClientRect().top)
        ?? window.scrollY;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }
}

</script>

<style lang="postcss" scoped>

</style>