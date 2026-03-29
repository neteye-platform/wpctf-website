<template>
  <GlitchLoader/>
  <CookieBanner/>
  <iframe src="/hero-animation" class="animation-iframe fixed -top-[10vh] left-0 w-full h-[120vh] -z-10 hidden xl:block"/>
  <SectionHero />
  <SectionTerminal/>
  <SectionPrizes/>
  <SectionRules/>
  <SectionGallery/>
  <SectionRegistration/>
</template>

<script setup lang="ts">
import SectionHero from "@/components/SectionHero.vue";
import SectionTerminal from "@/components/SectionAbout.vue";
import SectionPrizes from "@/components/SectionPrizes.vue";
import SectionGallery from "@/components/SectionGallery.vue";
import SectionRegistration from "@/components/SectionRegistration.vue";
import SectionRules from "@/components/SectionRules.vue";
import CookieBanner from "@/components/CookieBanner.vue";
import GlitchLoader from "@/components/elements/GlitchLoader.vue";
import { inject, onMounted } from "vue";
import TrackingService from "@/TrackingService/TrackingService";


const emitter = inject('emitter');

onMounted(() => {
  TrackingService.trackPage();

  document.querySelector('#wsm')?.setAttribute('src', '/js/registration.js');

  document.addEventListener('keydown', (e) => {
    if(!isRegistrationInViewPort()) {
      switch (e.key) {
        case "a":
        case "A":
          if (e.ctrlKey) {
            scrollPageTo("register", e);
          } else {
            scrollPageTo("about", e);
          }
          break;
        case "c":
        case "C":
          if (e.ctrlKey) {
            return;
          }
          scrollPageTo("hero-section", e);
          break;
        case "p":
        case "P":
          if (e.ctrlKey) {
            return;
          }
          scrollPageTo("prizes", e);
          break;
        case "r":
        case "R":
          if (e.ctrlKey) {
            return;
          }
          scrollPageTo("rules", e);
          break;
        case "g":
        case "G":
          if (e.ctrlKey) {
            return;
          }
          scrollPageTo("gallery", e);
          break;
      }
    }
  })
})

function scrollPageTo(target: string, e: Event): void {
  e.preventDefault();
  // @ts-ignore
  emitter.emit('scrollTo', target);
}

function isRegistrationInViewPort() {
  const registrationSection = document.getElementsByClassName('registration-container') ?? null;

  if(registrationSection) {
    const rect = registrationSection[0]?.getBoundingClientRect();
    const html = document.documentElement;

    if(!rect) return false;

    return (
        rect.top < (window.innerHeight || html.clientHeight) &&
        rect.left >= 0 && rect.bottom >= 0 &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
}
</script>

<style lang="postcss">

</style>
