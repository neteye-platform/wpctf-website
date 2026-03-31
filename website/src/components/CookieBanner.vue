<template>
  <div
    v-if="!userMadeChoice"
    id="cookie-container"
    class="fixed top-0 bottom-0 left-0 right-0 flex w-full h-full z-50 bg-black/80 justify-center items-center"
  >
    <div id="cookie" class="w-96 flex justify-center overflow-hidden">
      <div
        class="relative h-[fit-content] w-full text-terminal-text text-xl backdrop-blur-sm formatted-text font-terminal"
      >
        <div class="leading-4">___Cookie_consent____________________________________</div>
        <div class="grid grid-cols-10 text-terminal-text text-xl !leading-[1.2rem] pt-0.5 pb-1.5">
          <div class="col-span-10 left-start right-end pl-1">
            <br />
            This website uses cookies and tracking for analytics. For more information on how we use
            your data, please see our privacy and
            <a href="https://www.wuerth-phoenix.com/cookie-policy/">cookies policy</a>.
            <br /><br /><br />
          </div>
        </div>
        <div class="horizontal-divider"></div>
        <div class="grid grid-cols-10 text-terminal-text text-xl py-1">
          <button
            type="button"
            @click="decline"
            class="left-start right-end text-terminal-text text-xl h-[3.6rem] !leading-[1.2rem] col-span-5 flex-shrink-0 flex items-center group justify-between"
          >
            <span class="px-2">DECLINE</span>
            <span>X</span>
          </button>
          <button
            type="button"
            @click="accept"
            class="right-end text-terminal-text text-xl h-[3.6rem] !leading-[1.2rem] col-span-5 flex-shrink-0 flex items-center pl-4 group justify-between"
          >
            <span class="px-2">ACCEPT</span>
            <span>&gt;</span>
          </button>
        </div>
        <div class="horizontal-divider -mt-[0.1rem]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import TrackingService from '@/TrackingService/TrackingService'

let userMadeChoice = ref(false)
onBeforeMount(() => {
  document.body.classList.add('overflow-hidden')
  let cookiesAccepted = TrackingService.getUserAcceptsValue()
  if (cookiesAccepted !== null) {
    enableScroll()
  }
})

function enableScroll() {
  document.body.classList.remove('overflow-hidden')
  userMadeChoice.value = true
}

function accept() {
  enableScroll()
  TrackingService.consent()
}

function decline() {
  enableScroll()
  TrackingService.decline()
}
</script>

<style lang="postcss" scoped>
#cookie-container {
  z-index: 9999;
}

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
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iI0U3MTNGRiIgZD0ibTguMTU2MywxbC02LjMxMjU5LDBsMCwtMWw2LjMxMjU5LDBsMCwxeiIgaWQ9InN2Z18yIi8+CiA8L2c+Cjwvc3ZnPg==)
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
    left: 1px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjRTcxM0ZGIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4=)
      repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}

.right-end {
  @apply relative pr-4;
  &:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    right: 1px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjRTcxM0ZGIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4=)
      repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}
</style>
