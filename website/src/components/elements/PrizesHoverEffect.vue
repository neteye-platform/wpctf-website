<template>
  <div ref="elementsContainer" :id="`elementsContainer-${props.index}`">
    <span class="text-terminal-secondary absolute left-0 -bottom-10 element">€</span>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface Props {
  index: number | null
  isMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  index: null,
  isMobile: false
})

const elementsContainer = ref<HTMLElement | null>(null)
const multipliers: number[] = [4, 1, 0.7]
const multiplierIndex: number = props.index ?? 1

let memoX: number
let interval: ReturnType<typeof window.setInterval>
let offset: number
const time: number = !props.isMobile
  ? (((props.index ?? 1) + 1) * 100) / (multipliers[multiplierIndex] ?? 1)
  : 200

onMounted(() => {
  offset = props.isMobile ? 1 : 0.7
  memoX = 50
  interval = setInterval(() => {
    setUpAnimation()
  }, time)
})

function setUpAnimation(): void {
  try {
    const container = elementsContainer.value
    const source = container?.querySelector<HTMLElement>('.element')
    if (!container || !source) return

    const euro = source.cloneNode(true)
    if (!(euro instanceof HTMLElement)) return

    // go up not down
    const endY: number = container.clientHeight * -1.2
    // vary the size of the euros a bit
    const fontSize: number = gsap.utils.random(3, 3)
    // choose a random starting point

    // force them not overlapping
    let initialX: number = memoX
    const control: number = 20
    let i: number = 0
    while (initialX > memoX - 100 && initialX < memoX + 100 && i <= control) {
      initialX = gsap.utils.random(0, container.clientWidth * offset)
      memoX = initialX
      i++
    }

    // set initial values for popping element
    gsap.set(euro, {
      fontSize: `${fontSize}rem`,
      left: `${initialX}`
    })

    // add the new node to the DOM inside the container
    container.appendChild(euro)

    // animate the euro from its starting position to the endY we defined above
    gsap.to(euro, {
      duration: 0.8,
      y: endY,
      onComplete: () => {
        container.removeChild(euro)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style lang="postcss" scoped>
@reference '../../assets/css/main.css';
.element:first-child {
  @apply !opacity-0;
}
</style>
