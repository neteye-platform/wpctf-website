<template>
  <div
      id="fake-terminal"
      draggable="true"
      class="bg-terminal-bg/20 relative text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal w-full sm:max-w-xl mx-auto max-w-full min-h-[20rem]"
  >
    <span class="fake-terminal-text relative !leading-[1.1]"></span>
    <span v-if="!terminalAnimationDone" id="mini-terminal-cursor" class="relative left-0">
      <span class="text-base">█</span>
    </span>
  </div>
</template>

<script setup lang="ts">

  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/TextPlugin";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import {onMounted, ref} from "vue";

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  const terminalAnimationDone = ref<boolean>(false);

  ScrollTrigger.create({
    start: 0,
    end: "max",
  });

  const tl = gsap.timeline();

  onMounted(() => {
    let text;

    text = "-------------------------------------------<br>" +
            "! WARNING !<br>" +
            "-------------------------------------------<br>" +
            "Desktop device required to register.<br>" +
            "-------------------------------------------<br>" +
            "1. Get a laptop<br>" +
            "2. Come back to the website<br>" +
            "3. Register if you can";

    let section = document.querySelector('#registration');
    window.addEventListener('scroll', ()=> {
      if(section && ScrollTrigger.isInViewport(section)) {
        tl.to(".fake-terminal-text", {
          text: text,
          duration: 3,
          delay: .2,
          ease: 'none',
          onComplete: () => {
            terminalAnimationDone.value = true
          }
        })
      }
    })
  })
</script>

<style lang="postcss" scoped>

</style>