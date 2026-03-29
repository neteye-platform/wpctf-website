<template>
  <div class="flex flex-col relative section-bg-mobile z-0 w-screen overflow-hidden xl:overflow-visible !mt-0 pt-2 xl:pt-20">
    <WordDecoration :word="'SPONSORS'" class="relative z-40 !mb-0 hidden xl:block"/>
    <div class="w-full relative overflow-hidden z-40 xl:!mt-6">
      <WordDecoration :mobile="true" :word="'SPONSORS'" class="relative z-40 mb-5 xl:hidden"/>
      <SponsorsReelFooter/>
    </div>
    <DashDecoration class="relative z-40 !-mt-2 xl:!mt-0"/>
    <footer class="text-white w-full text-center xl:h-[75vh] relative z-30 pb-12 xl:pb-0 xl:pt-12">
      <div class="grid grid-cols-4 xl:grid-cols-8 w-full relative z-20 px-5 xl:px-10">
        <div class="col-span-4 xl:col-span-6">
          <h2 class="text-white text-5xl xl:text-7.5xl text-left font-alternate heading mb-40 xl:mb-0 mt-5 xl:mt-0" data-content="WP CTF 2024">
            WP CTF 2024
          </h2>
        </div>
        <div class="col-span-4 xl:col-span-2">
          <ul class="flex flex-col items-start">
            <li>
              <button @click="scrollPageTo('register')" type="button" class="text-white group text-2xl xl:text-1.5xl xl:hover:text-terminal-text">
                &gt; Register <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </button>
            </li>
            <li class="pt-6">
              <button @click="scrollPageTo('about')" type="button" class="text-white group text-2xl xl:text-1.5xl xl:hover:text-terminal-text">
                &gt; About <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </button>
            </li>
            <li>
              <button @click="scrollPageTo('prizes')" type="button" class="text-white group text-2xl xl:text-1.5xl xl:hover:text-terminal-text">
                &gt; Prizes <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </button>
            </li>
            <li>
              <button @click="scrollPageTo('rules')" type="button" class="text-white group text-2xl xl:text-1.5xl xl:hover:text-terminal-text">
                &gt; Rules <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </button>
            </li>
            <li class="pt-6">
              <a href="https://www.wuerth-phoenix.com" target="_blank" class="text-white group text-2xl xl:text-1.5xl xl:hover:text-terminal-text">
                &gt; Würth Phoenix <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li class="pt-9">
              <span class="flex w-full text-white/40 text-1.5xl !leading-tight text-left">
                © 2024 Würth Phoenix S.r.l.<br>VAT ID 01054690217
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <iframe src="/fire-animation" class="animation-iframe absolute w-full h-full bottom-0 left-0 z-20 overflow-hidden bg-black hidden xl:block"/>
  </div>
</template>

<script setup lang="ts">
  import SponsorsReelFooter from "@/components/elements/SponsorsReelFooter.vue";
  import WordDecoration from "@/components/elements/WordDecoration.vue";
  import DashDecoration from "@/components/elements/DashDecoration.vue";
  import { inject } from 'vue';

  const emitter = inject('emitter');
  function scrollPageTo(target: string): void {
    // @ts-ignore
    emitter.emit('scrollTo', target);
  }
</script>

<style lang="postcss" scoped>
  @media (max-width: 1279px) {
    .section-bg-mobile{
      background: url(/images/bg.jpg) center center no-repeat !important;
      background-size: cover;
    }
  }

</style>