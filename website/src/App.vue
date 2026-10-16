<template>
  <!-- opaque background so the dirty-screen overlays blend against it -->
  <main class="relative z-20 !transition-all bg-[#0F0F0F]">
    <div class="dirty-screen">
      <div class="dirty-screen1"></div>
      <div class="dirty-screen2"></div>
    </div>
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
import { useEmitter } from '@/events'

const emitter = useEmitter()
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
.dirty-screen {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: lighten;
}

.dirty-screen1,
.dirty-screen2 {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
}

.dirty-screen1 {
  background-image: url(/images/bg-dirty1.png);
}

.dirty-screen2 {
  background-image: url(/images/bg-dirty2.png);
}
</style>
