<template>
  <div id="crt" class="z-[1000] flex justify-center flicker crt flex-col min-h-screen">
    <div id="loader" class="flex justify-center">
      <div class="justify-center w-full pt-4 px-5 pb-0 h-screen">
        <header
          class="font-alternate flex justify-start whitespace-nowrap !mx-auto text-terminal-text text-left pb-3"
        >
          <span class="text-7xl sm:text-7xl flex shadow-outline mb-0">WP CTF 2025</span>
        </header>
        <MiniTerminal />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MiniTerminal from '@/components/elements/MiniTerminal.vue' // Make sure to install this library
</script>
