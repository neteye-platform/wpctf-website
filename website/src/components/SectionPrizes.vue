<template>
  <section id="prizes-section" class="w-full overflow-hidden relative py-3 !mt-40 xl:!mt-9" data-scroll="prizes">

    <div class="absolute top-0 left-0 w-full h-full section-bg -z-10"></div>

    <WordDecoration />

    <div class="grid gap-y-12 grid-cols-4 xl:grid-cols-8 px-5 xl:px-10 pt-5 xl:pt-16">

      <div class="hidden xl:block col-span-5"></div>
      <div class="col-span-4 xl:col-span-3 flex flex-col gap-y-5">
        <h2 class="text-white text-9xl xl:text-9.5xl 1680xl:text-10xl text-left font-alternate col-span-7 heading" data-content="Prizes">
          Prizes
        </h2>
        <p class="text-white/70 text-1.5xl xl:text-xl !leading-tight">The teams ranking first, second and third place will all be
          awarded prizes in the form of Amazon vouchers of the value foreseen by the position. The value of the prize
          will be equally divided between each team. The vouchers are personal and will be issued by email within one
          working week after the event.</p>
      </div>
    </div>

    <div class="grid gap-y-12 grid-cols-8 pr-5 xl:px-10 pb-16 mt-32 xl:mb-0 xl:-mt-28">

      <div class="grid-cols-1 xl:flex grid gap-x-28 col-span-8 relative z-10 items-end">

        <!-- PRIZE 1 -->
        <div
            @mouseover="hoveringElement = 0"
            @mouseout="hoveringElement = null"
            class="relative prize prize--one col-span-2 flex flex-col group xl:w-[23.5rem] pointer-events-none xl:pointer-events-auto"
        >
          <PrizesHoverEffect
              v-if="hoveringElement === 0"
              class="absolute w-full bottom-full left-0 h-32"
              :index="0"
          />
          <div class="flex">
            <div class="h-auto w-full relative !leading-none text-xl overflow-hidden max-w-[calc(100%-15ch)] xl:max-w-full group">
              <span class="text-1.25xl tracking-[.005rem] !leading-none block">
                <span class="text-xl font-alternate text-white/60 block xl:group-hover:!text-terminal-text ">______________________________________________________________________________________________________________________________________________________________________________________________________________</span>
                <span class="flex xl:hidden text-terminal-text text-5xl font-alternate flex-grow flex-col relative pl-5">
                  <span class="">1st</span>
                </span>
                <span class="text-white/20 hidden xl:block xl:group-hover:text-white/60 text-nowrap">
                  00000000: 01010110 00110001&nbsp;V1<br>
                  00000002: 01000010 01000100&nbsp;BD<br>
                  00000004: 01010110 01000101&nbsp;VE<br>
                  00000006: 01011010 00110111&nbsp;Z7<br>
                  00000008: 01100101 01010100&nbsp;eT<br>
                  0000000a: 01000010 00110001&nbsp;B1<br>
                  0000000c: 01011000 00110010&nbsp;X2<br>
                  0000000e: 00110100 01111010&nbsp;4z<br>
                  00000010: 01100100 01101010&nbsp;dj<br>
                  00000012: 01001110 01111001&nbsp;Ny<br>
                  00000014: 01011000 00110010&nbsp;X2<br>
                  00000016: 01110100 01110101&nbsp;tu<br>
                  00000018: 01001101 01001000&nbsp;MH<br>
                  0000001a: 01100100 01100110&nbsp;df<br>
                  0000001c: 01001101 01010111&nbsp;MW<br>
                  0000001e: 01011010 01100110&nbsp;Zf<br>
                  00000020: 01100100 01000111&nbsp;dG<br>
                  00000022: 01100111 01111010&nbsp;gz<br>
                  00000024: 01100011 01101010&nbsp;cj<br>
                  00000026: 01001110 01100110&nbsp;Nf<br>
                  00000028: 01001101 01010100&nbsp;MT<br>
                  0000002a: 01010110 01100110&nbsp;Vf<br>
                  0000002c: 01100011 01111010&nbsp;cz<br>
                  0000002e: 01000010 01110100&nbsp;Bt<br>
                  00000030: 01001101 00110001&nbsp;M1<br>
                  00000032: 00111001 01101111&nbsp;9o<br>
                  00000034: 01001101 01010111&nbsp;MW<br>
                  00000036: 01010010 01101011&nbsp;Rk<br>
                  00000038: 01001101 00110010&nbsp;M2<br>
                  0000003a: 00110101 01100110&nbsp;5f<br>
                  0000003c: 01100100 01000100&nbsp;dD<br>
                  0000003e: 01001110 00110100&nbsp;N4<br>
                  00000040: 01100100 01001000&nbsp;dH<br>
                  00000042: 00110000 01001011&nbsp;0K<br>
                  00000044: 00001010 00000000&nbsp;.<br>
                </span>
              </span>
            </div>
            <div>
              <div class="flex flex-col h-full">
                <span class="text-nowrap text-white/60 text-2xl xl:text-xl xl:group-hover:!text-terminal-text">prize in EUR</span>
                <span class="text-white text-7xl xl:text-6xl text-right block w-full relative -top-2 xl:group-hover:!text-terminal-text">
                  3000
                </span>
                <span class="hidden xl:flex text-terminal-text text-6.25xl font-alternate text-right flex-grow flex-col justify-end !leading-[0.85] relative">
                  <span class="">1st</span>
                </span>
              </div>
            </div>
          </div>
          <span class="text-xl font-alternate text-white/20 relative hidden xl:block overflow-hidden">_______________________________________________</span>
        </div>

        <!-- PRIZE 2 -->
        <div
            @mouseover="hoveringElement = 1"
            @mouseout="hoveringElement = null"
            class="relative prize prize--two col-span-2 flex flex-col group xl:w-[23.5rem] pointer-events-none xl:pointer-events-auto"
        >
          <PrizesHoverEffect
              v-if="hoveringElement === 1"
              class="absolute w-full bottom-full left-0 h-32"
              :index="1"
          />
          <div class="flex">
            <div class="h-auto w-full relative !leading-none text-xl overflow-hidden max-w-[calc(100%-15ch)] xl:max-w-full group">
              <span class="text-1.25xl tracking-[.005rem] !leading-none block">
                <span class="text-xl font-alternate text-white/60 block xl:group-hover:!text-terminal-text ">______________________________________________________________________________________________________________________________________________________________________________________________________________</span>
                <span class="flex xl:hidden text-terminal-text text-5xl font-alternate flex-grow flex-col relative pl-5">
                  <span class="">2nd</span>
                </span>
                <span class="text-white/20 hidden xl:block xl:group-hover:text-white/60 text-nowrap">
                  00000000: 01010110 00110001&nbsp;V1<br>
                  00000002: 01000010 01000100&nbsp;BD<br>
                  00000004: 01010110 01000101&nbsp;VE<br>
                  00000006: 01011010 00110111&nbsp;Z7<br>
                  00000008: 01100101 01010100&nbsp;eT<br>
                  0000000a: 01000010 00110001&nbsp;B1<br>
                  0000000c: 01011000 00110010&nbsp;X2<br>
                  0000000e: 00110100 01111010&nbsp;4z<br>
                  00000010: 01100100 01101010&nbsp;dj<br>
                  00000012: 01001110 01111001&nbsp;Ny<br>
                  00000014: 01011000 00110010&nbsp;X2<br>
                  00000016: 01110100 01110101&nbsp;tu<br>
                  00000018: 01001101 01001000&nbsp;MH<br>
                  0000001a: 01100100 01100110&nbsp;df<br>
                  0000001c: 01001101 01010111&nbsp;MW<br>
                  0000001e: 01011010 01100110&nbsp;Zf<br>
                  00000020: 01100100 01000111&nbsp;dG<br>
                  00000022: 01100111 01111010&nbsp;gz<br>
                  00000024: 01100011 01101010&nbsp;cj<br>
                  00000026: 01001110 01100110&nbsp;Nf<br>
                  00000028: 01001101 01010100&nbsp;MT<br>
                </span>
              </span>
            </div>
            <div>
              <div class="flex flex-col h-full">
                <span class="text-nowrap text-white/60 text-2xl xl:text-xl xl:group-hover:!text-terminal-text">prize in EUR</span>
                <span class="text-white text-7xl xl:text-6xl text-right block w-full relative -top-2 xl:group-hover:!text-terminal-text">
                  2000
                </span>
                <span class="hidden xl:flex text-terminal-text text-6.25xl font-alternate text-right flex-grow flex-col justify-end !leading-[0.85] relative">
                  <span class="">2nd</span>
                </span>
              </div>
            </div>
          </div>
          <span class="text-xl font-alternate text-white/20 relative hidden xl:block overflow-hidden">_______________________________________________</span>
        </div>

        <!-- PRIZE 3 -->
        <div
            @mouseover="hoveringElement = 2"
            @mouseout="hoveringElement = null"
            class="relative prize prize--three col-span-2 flex flex-col group xl:w-[23.5rem] pointer-events-none xl:pointer-events-auto"
        >
          <PrizesHoverEffect
              v-if="hoveringElement === 2"
              class="absolute w-full bottom-full left-0 h-32"
              :index="2"
          />
          <div class="flex">
            <div class="h-auto w-full relative !leading-none text-xl overflow-hidden max-w-[calc(100%-15ch)] xl:max-w-full group">
              <span class="text-1.25xl tracking-[.005rem] !leading-none block">
                <span class="text-xl font-alternate text-white/60 block xl:group-hover:!text-terminal-text ">______________________________________________________________________________________________________________________________________________________________________________________________________________</span>
                <span class="flex xl:hidden text-terminal-text text-5xl font-alternate flex-grow flex-col relative pl-5">
                  <span class="">3rd</span>
                </span>
                <span class="text-white/20 hidden xl:block xl:group-hover:text-white/60 text-nowrap">
                  00000000: 01010110 00110001&nbsp;V1<br>
                  00000002: 01000010 01000100&nbsp;BD<br>
                  00000004: 01010110 01000101&nbsp;VE<br>
                  00000006: 01011010 00110111&nbsp;Z7<br>
                  00000008: 01100101 01010100&nbsp;eT<br>
                  0000000a: 01000010 00110001&nbsp;B1<br>
                  0000000c: 01011000 00110010&nbsp;X2<br>
                  0000000e: 00110100 01111010&nbsp;4z<br>
                  00000010: 01100100 01101010&nbsp;dj<br>
                  00000012: 01001110 01111001&nbsp;Ny<br>
                  00000014: 01011000 00110010&nbsp;X2<br>
                  00000016: 01110100 01110101&nbsp;tu<br>
                  00000018: 01001101 01001000&nbsp;MH<br>
                </span>
              </span>
            </div>
            <div>
              <div class="flex flex-col h-full">
                <span class="text-nowrap text-white/60 text-2xl xl:text-xl xl:group-hover:!text-terminal-text">prize in EUR</span>
                <span class="text-white text-7xl xl:text-6xl text-right block w-full relative -top-2 xl:group-hover:!text-terminal-text">
                  1000
                </span>
                <span class="hidden xl:flex text-terminal-text text-6.25xl font-alternate text-right flex-grow flex-col justify-end !leading-[0.85] relative">
                  <span class="">3rd</span>
                </span>
              </div>
            </div>
          </div>
          <span class="text-xl font-alternate text-white/20 relative hidden xl:block overflow-hidden">_______________________________________________</span>
        </div>
      </div>
    </div>

    <PrizesHoverEffect
        v-if="isMobile"
        :is-mobile="isMobile"
        class="relative w-full left-0 h-32 mt-12"
        :index="4"
    />

    <WordDecoration class="!text-terminal-text xl:!text-lowcontrast-grey !mt-0"/>

  </section>
</template>

<script setup lang="ts">
import WordDecoration from "@/components/elements/WordDecoration.vue";
import PrizesHoverEffect from "@/components/elements/PrizesHoverEffect.vue";

import {h, onMounted, ref} from "vue";

const hoveringElement = ref<number | null>(null)
const isMobile = ref<boolean>(false);

onMounted(() => {
  if(window.innerWidth < 1280) {
    isMobile.value = true
  }
})

</script>

<style lang="postcss" scoped>
.section-bg{
  background: url(/images/bg.jpg) center center no-repeat;
  background-size: cover;
}
</style>
