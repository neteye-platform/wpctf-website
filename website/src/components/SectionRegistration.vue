<template>
  <section id="registration" class="bg-black flex flex-col w-full px-5 xl:pl-0 xl:pr-10 relative overflow-hidden !mt-0 x z-40 crt pb-24 pt-8 xl:pt-0" data-scroll="register">
    <iframe src="/registration-animation" class="animation-iframe absolute top-0 bottom-0 left-0 right-0 w-full h-full hidden xl:block"/>
    <div class="relative flex justify-end w-full">
      <a target="_blank" href="https://ertdfgcvb.xyz" class="relative flex-col items-start text-white/20 xl:hover:text-white/60 xl:pl-10 mt-9 text-xl !leading-tight hidden xl:flex">
        -----ASCII background art from<br>
        <span class="flex justify-between w-full">
          <span class="flex flex-grow">--></span> <span>ertdfgcvb.xyz</span>
        </span>
        <span class="flex justify-between w-full">
          <span class="flex flex-grow">--></span> <span>webgl_effects_ascii.html</span>
        </span>
        <span class="flex justify-between w-full">
          <span class="flex flex-grow">--></span> <span>glyphdrawing</span>
        </span>
      </a>
    </div>
    <div class="w-full flex justify-center pt-32 pb-16 xl:pt-8 xl:pb-8 sm:max-w-xl xl:max-w-full mx-auto">
      <div class="flex text-white flex-col w-full xl:w-128 self-center registration-container">

        <template v-if="!deviceType.isMobile">
          <div v-if="!challengeIsCompleted" class="w-full">
            <h2 class="crt text-white text-7xl xl:text-5.25xl text-left font-alternate heading pb-10 xl:pb-10 xl:pl-10" data-content="Registration">
              Registration
            </h2>
            <RegistrationTerminal class="crt"
                @solved="challengeIsCompleted = true"
            />
          </div>
          <div v-else class="w-full">
            <h2 class="text-white text-7xl xl:text-5.25xl text-left font-alternate heading pb-10 xl:pb-10 xl:pl-10" data-content="Registration">
              You made it!
            </h2>
            <RegistrationForm />
          </div>
        </template>

        <template v-else>
          <h2 class="text-white text-7xl xl:text-5.25xl text-left font-alternate heading pb-10 xl:pb-10 xl:pl-10" data-content="Registration">
            Registration
          </h2>
          <div>
            <FakeRegistrationTerminal />
          </div>
        </template>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RegistrationTerminal from "@/components/elements/RegistrationTerminal.vue";
import FakeRegistrationTerminal from "@/components/elements/FakeRegistrationTerminal.vue";
import RegistrationForm from "@/components/elements/RegistrationForm.vue";
import { ref } from "vue";
import { useCheckDevice } from '@/stores/device';

const deviceType = useCheckDevice();
const challengeIsCompleted = ref<boolean>(false);

</script>

<style lang="postcss">

</style>