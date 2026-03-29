<template>
  <div
      id="mini-terminal"
      draggable="true"
      class="bg-terminal-bg/20 relative w-full text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal sm:max-w-xl mx-auto xl:max-w-[50ch] min-h-[20rem]"
  >
    <span class="mini-terminal-command relative !leading-[1.1]"></span>
    <span class="mini-terminal-text relative !leading-[1.1]"></span>
    <span v-if="terminalAnimationDone || firstAnimationIsActive" id="mini-terminal-cursor" class="relative left-1.5" :class="!firstAnimationIsActive && 'terminal-blink'">
      <span class="text-base">█</span>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/TextPlugin";
  import { onMounted, ref } from "vue";
  import { useCheckDevice } from '@/stores/device';
  const deviceType = useCheckDevice();

  gsap.registerPlugin(TextPlugin);

  const terminalAnimationDone = ref<boolean>(false);
  const firstAnimationIsActive = ref<boolean>(true);
  const tl = gsap.timeline();

  onMounted(() => {

    let text1, text2, text3;

    text1 = "$ wpctf --edition 2024 -h<br>" +
        "Presented by: Würth Phoenix<br>" +
        "Location: Bolzano<br>" +
        "Date: Sat Nov 23 08:30:00 AM CET 2024";

    text2 = "_____________________________________________<br>" +
        "Commands for more info<br>" +
        "> About      A<br>" +
        "> Prizes     P<br>" +
        "> Rules      R<br>" +
        "> Gallery    G<br>" +
        "> Apply      Ctrl + A<br>" +
        "_____________________________________________<br>" +
        "Press a key: ";

    text3 = "_____________________________________________<br>" +
        "Warning! Desktop device required to register.<br>" +
        "_____________________________________________<br>";

    if(!deviceType.isMobile) {
      text1 += ("<br>" + text2);
    }else{
      text1 += ("<br>" + text3);
    }

    tl.to(".mini-terminal-text", {
      text: text1,
      duration: 3,
      delay: 2.2,
      ease: 'none',
      onComplete: () => {
        if(!deviceType.isMobile) {
          terminalAnimationDone.value = true;
        }
        firstAnimationIsActive.value = false;
      }
    })
  })
</script>

<style lang="postcss" scoped>

</style>
