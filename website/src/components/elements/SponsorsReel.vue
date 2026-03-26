<template>
  <div class="overflow-hidden">
    <WordDecoration
      :word="'SPONSORS'"
      class="relative z-40 !mb-0 hidden xl:block text-terminal-text/20"
    />

    <div class="w-full relative overflow-hidden z-40 xl:!mt-6">
      <WordDecoration
        :mobile="true"
        :word="'SPONSORS'"
        class="relative z-40 mb-5 xl:hidden text-terminal-text/20"
      />
      <div
        class="inline-block w-screen xl:w-auto overflow-scroll xl:overflow-hidden text-nowrap !mt-0 hide-scrollbar"
      >
        <div
          :id="props.reelId"
          class="w-auto text-nowrap space-x-16 md:space-x-20 lg:space-x-32 xl:space-x-44"
        >
          <div class="relative z-10 inline-block" v-for="(sponsor, index) in sponsorsList" :key="index">
            <a
              :href="`/sponsors#${sponsor.id}`"
              target="_self"
            >
            <span
              class="text-terminal-text/40 uppercase"
              :class="[
                index === 0 && 'ml-5 xl:ml-10',
                index === sponsorsList.length - 1 && 'mr-5 xl:mr-10'
              ]"
              >{{ sponsor.rank }} SPONSOR</span
            >
            <img
              :alt="sponsor.alt"
              :src="sponsor.src"
              width="130"
              height="60"
              class="h-12 w-22 xl:h-14 xl:w-26 object-contain"
              :class="[
                index === 0 && 'ml-5 xl:ml-10',
                index === sponsorsList.length - 1 && 'mr-5 xl:mr-10'
              ]"
            />
            </a>
          </div>
        </div>
      </div>
    </div>

    <DashDecoration class="relative z-40 !-mt-2 xl:!mt-0 text-terminal-text/20" />
  </div>
</template>

<script setup lang="ts">
import sponsors from '@/content/sponsors'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import { useCheckDevice } from '@/stores/device'
import DashDecoration from '@/components/elements/DashDecoration.vue'
import WordDecoration from '@/components/elements/WordDecoration.vue'

const sponsorsList = sponsors
const deviceType = useCheckDevice()

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  if (!deviceType.isMobile) {
    if (props.isBottom) {
      gsap.to('#' + props.reelId, {
        x: '-100%',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#' + props.reelId,
          start: 'top bottom',
          end: () => '+=10000',
          scrub: 3
        }
      })
    } else {
      gsap.to('#' + props.reelId, {
        x: '-100%',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: () => '+=10000',
          scrub: 3
        }
      })
    }
  }
})

const props = defineProps({
  reelId: {
    type: String,
    default: 'reel'
  },
  isBottom: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  display: none;
}

.object-contain {
  @apply fill-terminal-text;
}
</style>
