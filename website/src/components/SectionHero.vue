<template>
  <section id="hero-section" class="flex flex-col w-full !mt-0 xl:h-screen xl:min-h-[59.5rem] crt" data-scroll="hero">
    <NavHeader class="px-5 xl:px-10" />
    <div class="w-full flex flex-col pt-8 1680xl:pt-12 pb-8 1680xl:pb-10 px-5 xl:px-10 relative">
      <h1 class="text-white text-7.75xl xl:text-9.5xl 1680xl:text-10xl text-left font-alternate heading" data-content="Capture The Flag">
        Capture The Flag
      </h1>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-8 px-5 xl:px-10 flex-grow">
      <div class="col-span-4 xl:col-span-4">
        <p class="xl:max-w-[44ch] text-white/70 text-1.5xl xl:text-3xl font-normal text relative !leading-none gap-y-8">
          <span class="block">The WP CTF is back for another thrilling round on November 23rd at Würth Phoenix in Bolzano! This year marks a HACK-tacular third edition, packed with mind-bending challenges designed to test your cyber skills.</span>
          <br>
          <span class="flex items-start font-alternate">
            <span class="text-5xl">3</span>
            <span class="text-3xl">rd Edition</span>
          </span>
        </p>
      </div>
      <div class="col-span-4 xl:col-span-3 flex items-end justify-end pt-24 xl:pt-0 xl:pb-8">
        <MiniTerminal/>
      </div>
    </div>
    <div class="flex items-center pt-12 pb-6">
      <SponsorsReel />
    </div>
  </section>
</template>

<script setup>
  import MiniTerminal from "@/components/elements/MiniTerminal.vue";
  import SponsorsReel from "@/components/elements/SponsorsReel.vue";
  import NavHeader from "@/components/navigation/NavHeader.vue";
</script>

<style lang="postcss" scoped>


</style>
