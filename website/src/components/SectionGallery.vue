<template>
  <section id="gallery-section" class="w-full overflow-hidden relative py-3" data-scroll="gallery">
    <div class="absolute top-0 left-0 w-full h-full section-bg -z-10"></div>
    <WordDecoration/>
    <div class="grid gap-y-5 xl:gap-y-12 grid-cols-4 xl:grid-cols-8 px-5 xl:px-10 pt-5 xl:pt-16">
      <div class="col-span-3 flex flex-col">
        <h2 class="text-white text-9xl xl:text-9.5xl 1680xl:text-10xl text-left font-alternate" data-content="Gallery">
          Gallery
        </h2>
      </div>
      <div class="col-span-4 xl:col-span-3 hidden xl:flex"></div>
      <div class="col-span-4 xl:col-span-2 flex flex-col order-3 xl:order-2 pb-4 xl:pb-0 pt-10 xl:pt-0">
        <div class="grid grid-cols-4 xl:grid-cols-8">
          <a href="https://www.wuerth-phoenix.com/gallery-wp-ctf-2024/" target="_blank" class="link-svg col-span-4 xl:col-span-8 flex text-right items-center gap-x-6 xl:gap-x-8 justify-end text-white/40 hover:text-terminal-text">
            <span class="max-w-[5rem]">
              <svg height="3rem" viewBox="0 0 57 50" fill="none">
                <path d="M52.0892 4.1869H56.1329V16.6869H52.0892V20.8131H47.9861V25H43.8829V29.1263H39.8392V33.3132H35.7361H30.1312H26.7562V29.1263H30.1312H35.7361V25H39.8392V20.8131H43.8829V16.6869H47.9861V4.1869H35.7361V0H52.0892V4.1869ZM35.7361 8.31312H31.6924V4.1869H35.7361V8.31312Z"/>
                <path d="M4.04375 45.8131L5.37645e-05 45.8131L5.48354e-05 33.3131L4.04375 33.3131L4.04375 29.1869L8.14691 29.1869L8.14691 25L12.2501 25L12.2501 20.8737L16.2938 20.8737L16.2938 16.6868L20.3969 16.6868L31.5922 16.6868L31.5922 23.1341L26.7605 23.1341L26.7605 20.8737L20.3969 20.8737L20.3969 25L16.2938 25L16.2938 29.1869L12.2501 29.1869L12.2501 33.3131L8.14691 33.3131L8.14691 45.8131L20.3969 45.8131L20.3969 50L4.04375 50L4.04375 45.8131ZM20.3969 41.6869L24.4406 41.6869L24.4406 45.8131L20.3969 45.8131L20.3969 41.6869Z"/>
              </svg>
            </span>
            <span class="max-w-[calc(100%-5.5rem)]">
              <span class="text-7xl xl:text-7.5xl text-right font-alternate">2024</span>
            </span>
          </a>
          <a href="https://2023.wpctf.it/#/" target="_blank" class="link-svg col-span-4 xl:col-span-8 flex text-right items-center gap-x-6 xl:gap-x-8 justify-end text-white/40 hover:text-terminal-text">
            <span class="max-w-[5rem]">
              <svg height="3rem" viewBox="0 0 57 50" fill="none">
                <path d="M52.0892 4.1869H56.1329V16.6869H52.0892V20.8131H47.9861V25H43.8829V29.1263H39.8392V33.3132H35.7361H30.1312H26.7562V29.1263H30.1312H35.7361V25H39.8392V20.8131H43.8829V16.6869H47.9861V4.1869H35.7361V0H52.0892V4.1869ZM35.7361 8.31312H31.6924V4.1869H35.7361V8.31312Z"/>
                <path d="M4.04375 45.8131L5.37645e-05 45.8131L5.48354e-05 33.3131L4.04375 33.3131L4.04375 29.1869L8.14691 29.1869L8.14691 25L12.2501 25L12.2501 20.8737L16.2938 20.8737L16.2938 16.6868L20.3969 16.6868L31.5922 16.6868L31.5922 23.1341L26.7605 23.1341L26.7605 20.8737L20.3969 20.8737L20.3969 25L16.2938 25L16.2938 29.1869L12.2501 29.1869L12.2501 33.3131L8.14691 33.3131L8.14691 45.8131L20.3969 45.8131L20.3969 50L4.04375 50L4.04375 45.8131ZM20.3969 41.6869L24.4406 41.6869L24.4406 45.8131L20.3969 45.8131L20.3969 41.6869Z"/>
              </svg>
            </span>
            <span class="max-w-[calc(100%-5.5rem)]">
              <span class="text-7xl xl:text-7.5xl text-right font-alternate">2023</span>
            </span>
          </a>
        </div>
      </div>
    </div>
    <WordDecoration class="xl:pt-16"/>
  </section>
</template>

<script setup>

import WordDecoration from "@/components/elements/WordDecoration.vue";
</script>

<style lang="postcss" scoped>
.section-bg{
  background: url(/images/bg.jpg) center center no-repeat;
  background-size: cover;
}
.link-svg svg path {
  @apply fill-white/40;
}

.link-svg:hover svg path {
  @apply fill-terminal-text;
}
.waiting-for-animation {
  min-height: 15rem;
}
</style>
