<template>
  <section
    id="sponsors-section"
    class="flex flex-col w-full !mt-0 crt"
    data-scroll="sponsors"
  >
    <NavHeader class="px-5 xl:px-10" />
    <div class="grid grid-cols-12 px-5 xl:px-10 xl:mb-16 xl:mt-16 mt-4 mb-4">
      <div class="col-span-3 flex xl:visible"></div>
      <div class="xl:col-span-4 col-span-12 flex xl:ml-8">
        <h1
          class="text-terminal-main text-shadow-glow text-7xl xl:text-8xl text-left font-W95FA heading mb-7 xl:mb-0"
          data-content="Sponsors"
        >
          Sponsors
        </h1>
      </div>
    </div>

    <div class="grid grid-cols-12 px-5 xl:px-10 text-terminal-secondary text-shadow-glow-low">

      <div class="col-span-12 xl:col-span-12 w-full flex justify-center text-shadow-glow-medium">
        <div
            class="relative h-[fit-content] w-full text-terminal-secondary text-1.5xl xl:text-xl pb-4 pt-4 formatted-text font-terminal"
        >
          <div class="horizontal-divider mb-2 xl:block"></div>
        </div>
      </div>

      <!-- become a sponsor section -->

      <div class="xl:col-span-3 col-span-12 right-end flex">
        <div class="text-1.25xl text-shadow-glow-low text-terminal-secondary mb-4">BECOME A SPONSOR ></div>
      </div>
      <div class="xl:col-span-3 col-span-12 flex xl:ml-8">
        <h2
          class="text-terminal-secondary text-shadow-glow-medium text-5xl xl:text-5xl text-left font-W95FA heading mb-7 xl:mb-0"
          data-content="[ Your Logo ]"
        >
          YOUR LOGO >>>
        </h2>
      </div>

      <div class="xl:col-span-4 col-span-12 flex text-shadow-glow-low">
        <p class="block text-1.25xl mb-8">
          Sponsor our Capture The Flag event and connect with top tech talent, cybersecurity
          experts, and industry leaders. Elevate your brand while empowering the future of digital
          security. Join us as a sponsor and be at the forefront of the challenge—contact us today!
          <br />
          <br />
          <a href="mailto:marketing.italy@wuerth-it.it" class="xl:hover:text-white"
            >>> Write at: marketing.italy@wuerth-it.it
          </a>
        </p>
      </div>

      <div class="col-span-12 xl:col-span-12 w-full flex justify-center text-shadow-glow-medium mb-64">
        <div
          class="relative h-[fit-content] w-full text-terminal-text text-1.25xl xl:text-xl pb-4 pt-4 backdrop-blur-sm formatted-text font-terminal"
        >
          <div class="horizontal-divider mb-2 xl:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavHeader from '@/components/navigation/NavHeader.vue'
</script>

<style lang="postcss" scoped>
.horizontal-divider {
  @apply w-full h-[1px] relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iI0I0NUNGRiIgZD0ibTguMTU2MywxbC02LjMxMjU5LDBsMCwtMWw2LjMxMjU5LDBsMCwxeiIgaWQ9InN2Z18yIi8+CiA8L2c+Cjwvc3ZnPgo=)
      0 50%;
  }
}

.left-start {
  @apply relative pl-4;
  &:before {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    left: 2px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjQjQ1Q0ZGIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4K)
      repeat-y 0 0;
    background-size: 1px 1.22rem;
  }
}

.right-end {
  @apply relative pr-4;
  &:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    right: 2px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjQjQ1Q0ZGIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4K)
      repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}
</style>
