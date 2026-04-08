<template>
  <main class="relative z-20 !transition-all">
    <div class="dirty-screen1"></div>
    <div class="dirty-screen2"></div>
    <RouterView />
    <NavFooter />
  </main>
</template>

<script lang="ts">
export default {
  title: 'WP CTF 2026'
}
</script>

<script setup lang="ts">
import NavFooter from '@/components/navigation/NavFooter.vue'
import { inject } from 'vue'

const emitter: any = inject('emitter')
emitter.on('scrollTo', (target) => {
  // *Listen* for event
  scrollPage(target)
})

const handleHashChange = () => {
  const hash = window.location.hash.slice(1)
  scrollPage(hash)
}

window.addEventListener('load', handleHashChange)
window.addEventListener('hashchange', handleHashChange)

function scrollPage(target: string): void {
  const targetEl = document.querySelector(`[data-scroll="${target}"]`)
  if (targetEl) {
    let offset = window.scrollY
    if (targetEl.getBoundingClientRect().top) {
      offset += targetEl.getBoundingClientRect().top
    }
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="postcss">
.dirty-screen1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(/images/bg-dirty1.png);
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
}

.dirty-screen2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(/images/bg-dirty2.png);
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
}

</style>
