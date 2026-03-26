<template>
  <div
    id="loader"
    class="fixed top-0 left-0 w-full h-full z-[1000] bg-black flex justify-center flicker crt"
  >
    <svg>
      <defs>
        <filter id="screen-glitch" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0 0.01" result="noise" numOctaves="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="200" />
        </filter>
      </defs>
    </svg>
    <div class="container justify-center">
      <header
        data-content="Website is loading"
        class="font-alternate text-center items-center whitespace-nowrap !mx-auto"
      >
        <span>website is loading</span>
      </header>
      <div class="random-letters !mb-3 text-center flex justify-center !mx-auto text-2xl">
        <div class="random-letters_letter">
          <p>G</p>
          <p>3</p>
          <p>[</p>
          <p>6</p>
          <p>E</p>
          <p>!</p>
          <p>G</p>
          <p>T</p>
          <p>1</p>
          <p>J</p>
        </div>
        <div class="random-letters_letter">
          <p>L</p>
          <p>M</p>
          <p>U</p>
          <p>{</p>
          <p>}</p>
          <p>F</p>
          <p>-</p>
          <p>H</p>
          <p>*</p>
          <p>9</p>
        </div>
        <div class="random-letters_letter">
          <p>I</p>
          <p>+</p>
          <p>W</p>
          <p>]</p>
          <p>=</p>
          <p>L</p>
          <p>?</p>
          <p>5</p>
          <p>V</p>
          <p>1</p>
        </div>
        <div class="random-letters_letter">
          <p>T</p>
          <p>D</p>
          <p>7</p>
          <p>$</p>
          <p>S</p>
          <p>~</p>
          <p>C</p>
          <p>%</p>
          <p>"</p>
          <p>5</p>
        </div>
        <div class="random-letters_letter">
          <p>C</p>
          <p>M</p>
          <p>U</p>
          <p>{</p>
          <p>}</p>
          <p>F</p>
          <p>-</p>
          <p>H</p>
          <p>*</p>
          <p>9</p>
        </div>
        <div class="random-letters_letter">
          <p>H</p>
          <p>+</p>
          <p>W</p>
          <p>]</p>
          <p>=</p>
          <p>L</p>
          <p>?</p>
          <p>5</p>
          <p>V</p>
          <p>1</p>
        </div>
        <p>...<span class="cursor">|</span></p>
      </div>
      <div class="">
        <div class="loading-bar"></div>
      </div>

      <div
        class="mx-auto w-full flex justify-center text-center text-2xl lg:text-3xl text-white pt-8 lg:pt-12"
      >
        Encrypting connection...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.to('#loader', { autoAlpha: 0, duration: 0.3, delay: 2.2 })
  setTimeout(() => {
    document.body.classList.add('!overflow-auto')
  }, 2000)
})
</script>

<style>
:root {
  --header_font-size: 6rem;
  --random-letter_font-size: 1.8rem;
  --loading-bar_width: 25rem;
  --loading-bar_height: 1.9rem;
  --loading-bar_border: 0rem;
  --transition-time: 0.25s;
}

@media (max-width: 1023px) {
  :root {
    --header_font-size: 3rem;
    --random-letter_font-size: 1.4rem;
    --loading-bar_width: 25rem;
    --loading-bar_height: 1.9rem;
    --loading-bar_border: 0rem;
    --transition-time: 0.25s;
  }
}

#loader {
  svg {
    display: none;
  }

  .container {
    --color_primary: rgb(010, 010, 010);
    --color_secondary: rgb(255, 255, 255);
    --color_tertiary: #ffbf00;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    color: var(--color_secondary);
    overflow: hidden;
  }

  label {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 20px;
    width: 20px;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
  }

  header {
    align-self: end;
    position: relative;
    font-size: var(--header_font-size);
    z-index: 1;
    animation: screen-glitch 1.3s step-end infinite;
  }

  header::before,
  header::after {
    position: absolute;
    content: attr(data-content);
  }

  header::before {
    left: calc(calc(var(--header_font-size) / 14) * -1);
    animation:
      header_glitch 0.4s step-end infinite,
      header_clip-before 0.7s linear forwards infinite;
  }

  header::after {
    left: calc(var(--header_font-size) / 14);
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
    width: fit-content;
    animation:
      header_glitch 2.7s step-end infinite,
      header_clip-after 5.7s linear forwards infinite;
  }

  .random-letters {
    align-self: start;
    display: flex;
    font-size: var(--random-letter_font-size);
    line-height: var(--random-letter_font-size);
    color: var(--color_tertiary);
    height: var(--random-letter_font-size);
    margin: 5px 0 30px 0;
    overflow: hidden;
    z-index: 1;
    transition-duration: var(--transition-time);
    animation: screen-glitch 2.3s step-end infinite;
  }

  .random-letters_letter {
    animation: random-letters_cycle 1.1s step-end infinite;
  }

  .cursor {
    animation: cursor_blink 1s step-end infinite;
  }

  .loading-bar {
    position: relative;
    align-self: start;
    width: var(--loading-bar_width);
    height: var(--loading-bar_height);
    border: var(--loading-bar_border) solid var(--color_secondary);
    border-radius: 2px;
    transition-duration: var(--transition-time);
    z-index: 1;
    animation: screen-glitch 1.5s step-end forwards;
    background: url(/images/icons/chequered.svg) 100%;
    background-size: contain;
  }

  .loading-bar::before {
    position: absolute;
    top: 0;
    height: calc(100% - calc(var(--loading-bar_border) * 2));
    margin: var(--loading-bar_border);
    content: '';
    background: var(--color_tertiary);
    transition-duration: var(--transition-time);
    animation: loading-bar_progress 1.6s linear forwards;
  }
}

@keyframes screen-glitch {
  0% {
    filter: none;
  }
  97% {
    filter: url(#screen-glitch);
  }
}

@keyframes header_clip-before {
  from {
    clip-path: polygon(0 0, 100% 0, 100% 10%, 0 10%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);
  }
}

@keyframes header_clip-after {
  from {
    clip-path: polygon(0 10%, 100% 10%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0% 100%);
  }
}

@keyframes header_glitch {
  0% {
    opacity: 0;
  }
  97% {
    opacity: 1;
  }
}

@keyframes header_chromatic-aberration {
  0% {
    text-shadow: none;
  }
  97% {
    text-shadow:
      calc(var(--header_font-size) / 20) 0 rgb(213, 18, 127),
      calc(calc(var(--header_font-size) / 20) * -1) 0 rgb(23, 115, 134);
  }
}

@keyframes random-letters_cycle {
  0% {
    transform: translateY(calc(var(--random-letter_font-size) * 0));
  }
  10% {
    transform: translateY(calc(var(--random-letter_font-size) * -1));
  }
  20% {
    transform: translateY(calc(var(--random-letter_font-size) * -2));
  }
  30% {
    transform: translateY(calc(var(--random-letter_font-size) * -3));
  }
  40% {
    transform: translateY(calc(var(--random-letter_font-size) * -4));
  }
  50% {
    transform: translateY(calc(var(--random-letter_font-size) * -5));
  }
  60% {
    transform: translateY(calc(var(--random-letter_font-size) * -6));
  }
  70% {
    transform: translateY(calc(var(--random-letter_font-size) * -7));
  }
  80% {
    transform: translateY(calc(var(--random-letter_font-size) * -8));
  }
  90% {
    transform: translateY(calc(var(--random-letter_font-size) * -9));
  }
}

@keyframes cursor_blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes loading-bar_progress {
  0% {
    width: 0;
  }
  20% {
    width: calc(6% - calc(var(--loading-bar_border) * 2));
  }
  25% {
    width: calc(6% - calc(var(--loading-bar_border) * 2));
  }
  40% {
    width: calc(10% - calc(var(--loading-bar_border) * 2));
  }
  50% {
    width: calc(10% - calc(var(--loading-bar_border) * 2));
  }
  70% {
    width: calc(40% - calc(var(--loading-bar_border) * 2));
  }
  80% {
    width: calc(40% - calc(var(--loading-bar_border) * 2));
  }
  90% {
    width: calc(60% - calc(var(--loading-bar_border) * 2));
  }
  95% {
    width: calc(80% - calc(var(--loading-bar_border) * 2));
  }
  97% {
    width: calc(80% - calc(var(--loading-bar_border) * 2));
  }
  100% {
    width: calc(100% - calc(var(--loading-bar_border) * 2));
  }
}
</style>

<style lang="postcss" scoped>
#loader {
  z-index: 99999;
}
</style>
