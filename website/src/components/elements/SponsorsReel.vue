<template>
  <div class="inline-block w-screen xl:w-auto overflow-scroll xl:overflow-hidden text-nowrap !mt-0 hide-scrollbar">
    <div id="reel" class="w-auto text-nowrap space-x-16 md:space-x-20 lg:space-x-32 xl:space-x-44">
      <div class="relative z-10 inline-block" v-for="(sponsor, index) in sponsors" :key="index">
        <img
            :alt="sponsor.alt"
            :src="sponsor.src"
            width="130"
            height="60"
            class="h-12 w-22 xl:h-14 xl:w-26 object-contain"
            :class="[
                index === 0 && 'ml-5 xl:ml-10',
                index === sponsors.length-1 && 'mr-5 xl:mr-10',
            ]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import sponsors from "@/content/sponsors"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { useCheckDevice } from '@/stores/device';

const deviceType = useCheckDevice();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

  if(!deviceType.isMobile) {

    gsap.to("#reel", {
      x: "-100%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: () => '+=10000',
        scrub: 3
      }
    });

  }

})

</script>

<style lang="postcss" scoped>
  ::-webkit-scrollbar {
    display: none;
  }
</style>
