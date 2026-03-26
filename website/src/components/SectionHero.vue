<template>
  <section
    id="hero-section"
    class="flex flex-col w-full !mt-0 xl:h-screen xl:min-h-[59.5rem] crt"
    data-scroll="hero"
  >
    <NavHeader class="px-5 xl:px-10" />
    <div class="w-full flex flex-col pt-8 1680xl:pt-12 pb-8 1680xl:pb-10 px-5 xl:px-10 relative">
      <h1
        class="text-terminal-glow text-7.75xl xl:text-9.5xl 1680xl:text-10xl text-right font-W95FA heading text-shadow-glow inline-flex self-end"
        data-content="WP CTF 2025"
      >
        WP CTF 2025
      </h1>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-8 px-5 xl:px-10 flex-grow">
      <div
        class="col-span-4 xl:col-span-4 flex items-end justify-end pt-12 xl:pt-0 xl:pb-8 pb-8 order-2 xl:order-1 text-shadow-glow-medium"
      >
        <MiniTerminal />
      </div>

      <div
        class="col-span-4 xl:col-span-4 justify-end flex order-1 xl:order-2 text-shadow-glow-low"
      >
        <p
          class="xl:max-w-[75ch] text-terminal-text/60 text-1.5xl xl:text-3xl font-normal text relative !leading-none gap-y-8 text-right"
        >
          <span class="block"
            >The WP capture the flag  is back for another thrilling round on <redacted data="November 29th"/> at NOI Techpark in
            Bolzano! This year marks a HACK-tacular fourth edition, packed with mind-bending
            challenges designed to test your cyber skills.</span
          >
          <br />
          <span class="flex items-start justify-end">
            <span class="text-7.5xl">4</span>
            <span class="text-3xl">th Edition</span>
          </span>
        </p>
      </div>
    </div>
    <SponsorsReel />
  </section>
</template>

<script setup>
import MiniTerminal from '@/components/elements/MiniTerminal.vue'
import SponsorsReel from '@/components/elements/SponsorsReel.vue'
import NavHeader from '@/components/navigation/NavHeader.vue'
import Redacted from "@/components/elements/Redacted.vue";
</script>

<style lang="postcss" scoped></style>
