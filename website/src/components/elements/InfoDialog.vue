<template>
  <Teleport to="body">
    <Transition name="info-dialog">
      <div
        v-if="modelValue"
        ref="rootRef"
        class="info-dialog-root fixed inset-0 flex items-center justify-center px-5 outline-none"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        @click.self="close"
        @keydown.esc="close"
      >
        <div
          class="info-dialog-overlay absolute inset-0 bg-black/50"
          @click="close"
        ></div>
        <div
          class="info-dialog-box relative w-full max-w-[40rem] max-h-[90vh] flex flex-col bg-[#7EDAFF] text-black p-5 pr-5"
          @click.stop
        >
          <div class="group absolute top-[-0.7rem] sm:top-[-0.8rem] left-[-0.3rem] sm:left-[-0.3rem] scale-75 sm:scale-100 origin-top-left">
            <img src="/images/banners/robo-calm-dialog.svg" class="block group-hover:hidden"></img>
            <img src="/images/robot-face/robot-face3.svg" class="absolute top-[9px] left-[7px] block group-hover:hidden"></img>
            <img src="/images/banners/robo-angry-dialog.svg" class="hidden group-hover:block"></img>
          </div>
          <button
            type="button"
            class="info-dialog-close absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl leading-none hover:opacity-70"
            aria-label="Close dialog"
            @click="close"
          >
           <img src="/images/banners/robo-close.svg" alt="Close" class="w-16 h-16">
          </button>
          <div class="info-dialog-content flex-1 min-h-0 overflow-y-auto leading-[1.2rem] text-[1.2rem] sm:leading-[1.5rem] sm:text-[1.5rem] mt-16 sm:mt-20 pr-0 pb-12">
            <slot>
              <p>
                <strong>We fully understand that AI is the future in cybersecurity, and we embrace it.</strong> That being said, our CTF is about learning, experimenting, and testing your limits.<br/><br/>

                For the challenges you will need to rely on <br/>
                raw biological neural networks.<br/>
                <strong>LLM usage will be limited</strong><br/><br/>

                The distinction is simple:
              </p>
              <p class="w-100% overflow-hidden text-nowrap">
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
                <strong>YES &nbsp;</strong>| As a replacement for searching the web <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
                <strong>YES &nbsp;</strong>| As an auto complete on steroids in your IDE  <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
                <strong>NO &nbsp;&nbsp;</strong>| Letting AI solve the challenge for you <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
              </p>
              <p class="w-100% overflow-hidden text-nowrap">
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p>
                <br/>
                If the AI does the thinking, experimenting, and solving, you're not learning to hack. You're learning to prompt. We can do that another time. <br/><br/>

                <strong>Use AI to be productive. <br/>
                In this CTF, let's test your own neural network.</strong> <br/><br/>

                <strong>Register Now, if you can ;)</strong><br>
              </p>
            </slot>
          </div>
          <div class="info-dialog-fade pointer-events-none absolute bottom-5 left-0 right-0 h-16"></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const rootRef = ref<HTMLDivElement | null>(null)

function close() {
  emit('update:modelValue', false)
}

let lockedScrollY = 0
let isLocked = false

function lockScroll() {
  if (typeof document === 'undefined' || isLocked) return
  lockedScrollY = window.scrollY || window.pageYOffset || 0
  const body = document.body
  body.style.position = 'fixed'
  body.style.top = `-${lockedScrollY}px`
  body.style.left = '0'
  body.style.right = '0'
  body.style.width = '100%'
  isLocked = true
}

function unlockScroll() {
  if (typeof document === 'undefined' || !isLocked) return
  const body = document.body
  body.style.position = ''
  body.style.top = ''
  body.style.left = ''
  body.style.right = ''
  body.style.width = ''
  window.scrollTo(0, lockedScrollY)
  isLocked = false
}

watch(
  () => props.modelValue,
  async (open) => {
    if (typeof document === 'undefined') return
    if (open) {
      lockScroll()
      await nextTick()
      rootRef.value?.focus()
    } else {
      unlockScroll()
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  unlockScroll()
})
</script>

<style lang="postcss" scoped>
.info-dialog-root {
  z-index: 100000;
}

.info-dialog-fade {
  background: linear-gradient(to bottom, rgba(126, 218, 255, 0) 0%, rgba(126, 218, 255, 1) 100%);
}

.info-dialog-content :deep(strong) {
  background-image: linear-gradient(#FCFF9D, #FCFF9D);
  background-repeat: no-repeat;
  background-size: 100% calc(100% - 2px);
  background-position: 0 1px;
  font-weight: normal;
}

.info-dialog-enter-active,
.info-dialog-leave-active {
  transition: opacity 0.2s ease;
}
.info-dialog-enter-from,
.info-dialog-leave-to {
  opacity: 0;
}
</style>
