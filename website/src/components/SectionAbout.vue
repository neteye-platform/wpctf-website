<template>
  <section class="flex flex-col w-full crt px-5 xl:px-10 gap-y-14 xl:gap-y-0 pt-16 xl:pt-8" data-scroll="about">

    <div class="grid grid-cols-4 xl:grid-cols-8 w-full sm:max-w-xl xl:max-w-full mx-auto">
      <div class="hidden xl:block col-span-2"></div>
      <div class="col-span-4 xl:col-span-3 text-white flex flex-col gap-y-6 xl:gap-y-10">
        <h2 class="text-white text-7xl xl:text-7.5xl text-left font-alternate flex flex-col">
          <span class="heading" data-content="23.Nov">23.Nov</span>
          <span class="heading" data-content="Bolzano">Bolzano</span>
        </h2>
        <div class="w-full h-[19rem] flex justify-center">
          <div class="bg-terminal-bg/20 relative w-full text-terminal-text text-1.5xl xl:text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal">
            <span id="about-text-1" class="!leading-[1.1]"></span>
            <span v-if="!firstTerminalAnimationDone" id="mini-terminal-cursor" class="relative left-0">
              <span class="text-base">█</span>
            </span>
          </div>
        </div>
      </div>
      <div class="hidden xl:block col-span-3"></div>
    </div>

    <div class="grid grid-cols-4 xl:grid-cols-8 w-full relative xl:-mt-[14rem] sm:max-w-xl xl:max-w-full mx-auto">
      <div class="col-span-4"></div>
      <div class="col-span-4 xl:col-span-3 text-white flex flex-col gap-y-6 xl:gap-y-10 relative">
        <h2 class="text-white text-7xl xl:text-7.5xl text-left font-alternate heading" data-content="The Event">
          The Event
        </h2>
        <div class="w-full flex min-h-[30rem] xl:min-h-[34rem] justify-center">
          <div class="bg-terminal-bg/20 relative w-full text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal">
            <div class="xl:max-w-[46ch]">
              <span id="about-text-2" class="!leading-[1.1]"></span>
              <span v-if="secondTerminalAnimationDone || secondAnimationIsActive" id="mini-terminal-cursor" class="relative left-0" :class="!secondAnimationIsActive && 'terminal-blink'">
                <span class="text-base">█</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-0 xl:pr-10 xl:mt-32 hidden xl:flex">
      <a target="_blank" href="https://ertdfgcvb.xyz" class="text-white/40 xl:hover:text-white/60 text-1.5xl !leading-tight">
        ASCII background art from<br>
        1) ertdfgcvb.xyz<br>
        2) webgl_effects_ascii.html<br>
        3) glyphdrawing<br>
      </a>
    </div>

  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {inject, onMounted, ref} from "vue";
import { useCheckDevice } from '@/stores/device';
const deviceType = useCheckDevice();

gsap.registerPlugin(TextPlugin, Draggable, ScrollTrigger);

const firstTerminalAnimationDone = ref<boolean>(false);
const secondTerminalAnimationDone = ref<boolean>(false);
const secondAnimationIsActive = ref<boolean>(true);
const tl = gsap.timeline();

let text_static, text1, text2, text3;

text_static = "$ wpctf --edition 2024 --when<br>" +
              "November 23, 2024 08.30 - 18.00 <br>" +
              "Johann Kravogl Str. 4, 39100<br>" +
              "Bolzano, Italy";

text1 = "$ wpctf --edition 2024 --about<br><br>" +
        "1. The {WP CTF 2024} competition is designed for cyber-savvy university students.  Find the software vulnerabilities, collect the hidden \"flags\" and win the competition!<br><br>" +
        "2. All you need is your laptop and the willingness to compete! We'll take care of the rest: breakfast, lunch and snacks will be provided to make sure you have all the necessary energy to capture all the flags you can. But wait, that's not all! After the competition there will be an aperitif to get to know all participants and the organizers of the event, allowing you to expand your network!";

text2 = "_____________________________________________<br>" +
        "> Ctrl + A &nbsp; Start registration process<br>" +
        "> C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cancel<br>" +
        "_____________________________________________<br>" +
        "Press a key: ";

text3 = "_____________________________________________<br>" +
        "Warning! Desktop device required to register.<br>" +
        "_____________________________________________<br>";

if(!deviceType.isMobile) {
  text1 += ("<br><br>" + text2);
}else{
  text1 += ("<br><br>" + text3);
}

onMounted(() => {

  ScrollTrigger.create({
    start: 0,
    end: "max",
  });

  let section = document.querySelector('[data-scroll="about"]');
  window.addEventListener('scroll', ()=> {
    if(section && ScrollTrigger.isInViewport(section)) {
      tl.to("#about-text-1", {
        text: text_static,
        duration: 1.5,
        delay: .5,
        ease: 'none',
        onComplete: () => {
          firstTerminalAnimationDone.value = true;
        }
      })
      tl.to("#about-text-2", {
        text: text1,
        duration: 4,
        delay: 0,
        ease: 'none',
        onComplete: () => {
          if(!deviceType.isMobile) {
            secondTerminalAnimationDone.value = true;
          }
          secondAnimationIsActive.value = false;
        }
      }, '-=.8')
    }
  })
});
</script>

<style lang="scss" scoped>

</style>