<template>
  <button
    type="button"
    :class="[
      'robo-banner group absolute w-[316px] h-[87px] p-0 border-0 bg-transparent cursor-pointer',
      positionClass,
      originClass,
      scaleClass,
      rotateClass
    ]"
    aria-label="Open info dialog"
    @click="$emit('click', $event)"
  >
    <img
      src="/images/banners/robo-calm.svg"
      alt=""
      class="absolute inset-0 w-full h-full select-none pointer-events-none group-hover:opacity-0"
      draggable="false"
    />
    <img
      src="/images/robot-face/robot-face3.svg"
      alt=""
      class="absolute top-[9px] left-[7px] select-none pointer-events-none group-hover:opacity-0"
      draggable="false"
    />
    <img
      src="/images/banners/robo-angry.svg"
      alt=""
      class="absolute inset-0 w-full h-full select-none pointer-events-none opacity-0 group-hover:opacity-100"
      draggable="false"
    />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    positionClass?: string
    originClass?: string
    scaleClass?: string
    rotateClass?: string
  }>(),
  {
    positionClass:
      'top-32 sm:top-48 lg:top-44 xl:top-50 right-10 sm:right-auto left-auto sm:left-5 xl:left-8',
    originClass: 'origin-top-right sm:origin-top-left',
    scaleClass: 'scale-75 lg:scale-100 xl:scale-125',
    rotateClass: 'rotate-[-10deg]'
  }
)

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style lang="postcss" scoped>
.robo-banner {
  z-index: 1000;
}
</style>
