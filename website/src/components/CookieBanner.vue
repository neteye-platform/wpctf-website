<template>
  <div
    v-if="!userMadeChoice && !loader.isLoading"
    id="cookie-container"
    class="fixed inset-0 flex items-center justify-center bg-black/90 px-4"
    role="dialog"
    aria-modal="true"
    aria-label="Cookie consent"
  >
    <div
      class="relative font-terminal text-[1rem] sm:text-[1.25rem] leading-none text-terminal-text text-shadow-glow-low"
    >
      <pre class="m-0 font-terminal leading-none" aria-hidden="true">{{ frame }}</pre>
      <p class="cookie-text absolute">
        This website uses cookies and tracking for analytics. For more information on how we use
        your data, please see our
        <a
          href="https://www.wuerth-it.it/cookie-policy/"
          target="_blank"
          rel="noopener"
          class="cookie-link"
          >privacy and cookies policy</a
        >.
      </p>
      <button type="button" class="cookie-button cookie-button-decline" @click="decline">
        <span>DECLINE</span>
        <span aria-hidden="true">X</span>
      </button>
      <button type="button" class="cookie-button cookie-button-accept" @click="accept">
        <span>ACCEPT</span>
        <span aria-hidden="true">&gt;</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { hasConsentChoice, setConsent } from '@/consent'
import { useLoader } from '@/stores/loader'

const loader = useLoader()

const frame = [
  '+-----------------------------------------+. ',
  '|`.                                       | `.',
  '|  `+-Cookie-consent--------------------------+',
  '|   |                                         |',
  '|   |                                         |',
  '|   |                                         |',
  '|   |                                         |',
  '|   |                                         |',
  '|   |                                         |',
  '|   |                                         |',
  '+---|                                         |',
  '|`. |                                         |',
  '|  `+--------------------+--------------------+',
  '|   |                    |                    |',
  '+---|                    |                    |',
  ' `. |                    |                    |',
  '   `+--------------------+--------------------+'
].join('\n')

const userMadeChoice = ref(hasConsentChoice())

function accept() {
  setConsent(true)
  userMadeChoice.value = true
}

function decline() {
  setConsent(false)
  userMadeChoice.value = true
}
</script>

<style lang="postcss" scoped>
/* Above the .dirty-screen texture overlay in App.vue (z-index 99999). */
#cookie-container {
  z-index: 100000;
}

/* Positions are in character cells of the ASCII frame: 1ch per column, 1em per row. */
.cookie-text {
  left: 6ch;
  top: 4em;
  width: 32ch;
}

.cookie-button {
  @apply absolute flex items-center justify-between leading-none;
  top: 13em;
  width: 20ch;
  height: 3em;
  padding: 0 3ch;
}

.cookie-button,
.cookie-link {
  &:hover,
  &:focus-visible {
    @apply text-[#FF8AC9] outline-none;
  }
}

.cookie-button-decline {
  left: 5ch;
}

.cookie-button-accept {
  left: 26ch;
}
</style>
