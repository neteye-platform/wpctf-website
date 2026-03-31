<template>
  <section
    class="flex flex-col w-full crt px-5 xl:px-10 gap-y-14 xl:gap-y-0 pt-32 pb-32 md:pt-40 md:pb-40"
    data-scroll="about"
  >
    <div class="grid grid-cols-4 xl:grid-cols-8 w-full sm:max-w-xl xl:max-w-full mx-auto">
      <div class="col-span-4"></div>
      <div class="col-span-4 xl:col-span-3 text-white flex flex-col gap-y-6 xl:gap-y-10">
        <h2
          class="text-terminal-main text-7xl xl:text-7.5xl text-left font-W95FA flex flex-col text-shadow-glow"
        >
          <span class="heading" data-content="29.Nov"><redacted data="29.Nov"/></span>
          <span class="heading" data-content="Bolzano">NOI Techpark</span>
        </h2>
        <div class="w-full h-[19rem] flex justify-center text-shadow-glow-medium">
          <div
            class="bg-terminal-bg/10 border border-terminal-text/30 shadow-[inset_0px_0px_60px_#FF139C1A] relative w-full text-terminal-text text-1.5xl xl:text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal"
          >
            <span id="about-text-1" class="!leading-[1.1] w-full block">
              Every 1.0s: python -c "import datetime; print(datetime.datetime(<redacted data="2025, 11, 29, 8, 0"/>) -
              datetime.datetime.today())
              <br /><br />
              <redacted :data="etaEvent"/>
            </span>
          </div>
        </div>
      </div>
      <div class="hidden xl:block col-span-3"></div>
    </div>

    <div
      class="grid grid-cols-4 xl:grid-cols-8 w-full relative xl:-mt-[14rem] sm:max-w-xl xl:max-w-full mx-auto"
    >
      <div class="hidden xl:block col-span-2"></div>
      <div class="col-span-4 xl:col-span-3 text-white flex flex-col gap-y-6 xl:gap-y-10 relative">
        <h2
          class="text-terminal-main text-7xl xl:text-7.5xl text-left font-W95FA heading text-shadow-glow"
          data-content="The Event"
        >
          The Event
        </h2>
        <div class="w-full flex min-h-[30rem] xl:min-h-[34rem] justify-center">
          <div
            class="bg-terminal-bg/10 border border-terminal-text/30 shadow-[inset_0px_0px_60px_#FF139C1A] relative w-full text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal text-shadow-glow-medium"
          >
            <div>
              <div id="about-text-2" class="!leading-[1.1] grid grid-cols-12">
                <div class="col-span-4">WPCTF(1)</div>
                <div class="col-span-4 text-center">General Event Manual</div>
                <div class="col-span-4 text-end">WPCTF(1)</div>

                <div class="col-span-12 mt-6">NAME</div>
                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9">
                  wpctf - Würth Protect Capture The Flag event
                </div>

                <div class="col-span-12 mt-6">SYNOPSIS</div>
                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9">
                  wpctf [OPTION]...
                </div>


                <div class="col-span-12 mt-6">DESCRIPTION</div>
                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9">
                  The {WP CTF 2025} competition is designed for cyber-savvy university students. Find the software vulnerabilities, collect the hidden "flags" and win the competition!
                </div>
                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9 mt-6">
                  All you need is your laptop and the willingness to compete!
                  We'll take care of the rest: breakfast,
                  lunch and snacks will be provided to make sure you
                  have all the necessary energy to capture as all the
                  flags you can. But wait, that's not all! After the
                  competition there will be an aperitif to get to know
                  all participants and the organizers of the event,
                  allowing you expand your network!
                </div>

                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9 mt-6">
                  -w, --when
                </div>
                <div class="col-span-3 xl:col-span-4"></div>
                <div class="col-span-9 xl:col-span-8">
                  <div class="col-span-12">print the event date: </div>
                  <div class="col-span-12">
                    <redacted data="November 29, 2025"/>
                  </div>
                </div>

                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9 mt-6">
                  -h, --hour
                </div>
                <div class="col-span-3 xl:col-span-4"></div>
                <div class="col-span-9 xl:col-span-8">
                  <div class="col-span-12">print the event duration:</div>
                  <div class="col-span-12">
                    8:00 - 18:00
                  </div>
                </div>

                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9 mt-6">
                  -a, --address
                </div>
                <div class="col-span-3 xl:col-span-4"></div>
                <div class="col-span-9 xl:col-span-8">
                  <div class="col-span-12">print the location:</div>
                  <div class="col-span-12">
                    NOI Tech Park<br>
                    Via Volta 13/A, 39100<br>
                    Bolzano, Italy
                  </div>
                </div>

                <div class="col-span-12 mt-6">SEE ALSO</div>
                <div class="col-span-1 xl:col-span-2"></div>
                <div class="col-span-11 xl:col-span-9">
                  <a href="https://2023.wpctf.it" target="_blank" class="hover:text-white">wpctf2023(1)</a>, <a href="https://2024.wpctf.it" target="_blank" class="hover:text-white">wpctf2024(1)</a>
                </div>

              </div>
              <span
                id="mini-terminal-cursor"
                class="relative left-0 terminal-blink"
              >
                <span class="text-base">█</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
import { useCheckDevice } from '@/stores/device'
import Redacted from "@/components/elements/Redacted.vue";

gsap.registerPlugin(TextPlugin, Draggable, ScrollTrigger)

let etaEvent = ref<string>('')

const updateEtaEvent = () => {
  const eventDate = new Date(2025, 10, 29, 8, 0)
  const eventEndDate = new Date(2025, 10, 29, 18, 0)
  const now = new Date()

  if (now >= eventDate && now <= eventEndDate) {
    etaEvent.value = 'In progress...'
  } else if (now > eventEndDate) {
    etaEvent.value = 'Concluded!'
  } else {
    const diff = eventDate.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0')
    etaEvent.value = `${days} days, ${hours}:${minutes}:${seconds}`
  }
}

onMounted(() => {
  setInterval(updateEtaEvent, 1000)
})
</script>

<style lang="scss" scoped></style>
