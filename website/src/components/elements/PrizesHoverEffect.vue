<template>
  <div :id="`elementsContainer-${props.index}`">
    <span class="text-terminal-text absolute left-0 -bottom-10 element">€</span>
  </div>
</template>

<script setup lang="ts">

  import { gsap } from "gsap";
  import {onBeforeUnmount, onMounted} from "vue";

  interface Props {
    index: number | null,
    isMobile?: boolean
  }

  const props = withDefaults(defineProps<Props>(),{
    index: null,
    isMobile: false
  })

  let multipliers = [4, 1, 0.7];
  let multiplierIndex = props.index ?? 1

  let memoX, interval, offset;
  let time = !props.isMobile ? (((props.index ?? 1) + 1)*100)/multipliers[multiplierIndex] : 200;

  onMounted(() => {
    offset = props.isMobile ? 1 : 0.7;
    memoX = 50;
    interval = setInterval(() => {
      setUpAnimation();
    }, time)
  })

  function setUpAnimation() {

    try{
      let container = document.querySelector('#elementsContainer-' + props.index);
      // @ts-ignore
      let euro = container.querySelectorAll('.element')[0].cloneNode(true);
      // go up not down
      // @ts-ignore
      let endY = container.clientHeight * -1.2;
      // vary the size of the euros a bit
      let fontSize = gsap.utils.random(3, 3);
      // choose a random starting point

      // force them not overlapping
      let initialX = memoX;
      let control = 20;
      let i = 0;
      while(
          (
            initialX > (memoX - (100)) &&
            initialX < (memoX + (100))
          ) && i <= control
      ) {
        // @ts-ignore
        initialX = gsap.utils.random(0, container.clientWidth*offset);
        memoX = initialX;
        i++;
      }

      // set initial values for popping element
      gsap.set(euro, {
        fontSize: `${fontSize}rem`,
        left: `${initialX}`,
      });

      // add the new node to the DOM inside the container
      // @ts-ignore
      container.appendChild(euro);

      // animate the euro from its starting position to the endY we defined above
      gsap.to(euro, {
          duration: .8,
          y: endY,
          onComplete: () => {
            // @ts-ignore
            container.removeChild(euro);
          },
      });
    }catch(err){
      console.log(err);
    }

  }

  onBeforeUnmount(() => {
    clearInterval(interval);
  })

</script>

<style lang="postcss" scoped>
  .element:first-child{
    @apply !opacity-0;
  }
</style>
