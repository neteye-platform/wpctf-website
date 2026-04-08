<template>
  <section
    id="footer-section"
    class="w-full overflow-hidden relative py-3 bg-terminal-section/15"
    data-scroll="footer"
  >
    <SponsorsReel reel-id="footer-reel" :is-bottom="true" />
    <footer
      class="text-terminal-main w-full text-center xl:h-[75vh] relative z-30 pb-12 xl:pb-0 xl:pt-12"
    >
      <div class="grid grid-cols-4 xl:grid-cols-8 w-full relative z-20 px-5 xl:px-10">
        <div class="col-span-4 xl:col-span-2">
          <ul class="flex flex-col items-start">
            <li>
              <a
                href="/#register"
                class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; Register <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li class="pt-6">
              <a
                href="/#about"
                type="button"
                class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; About <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li>
              <a
                href="/#prizes"
                type="button"
                class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; Prizes <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li>
              <a
                href="/#rules"
                type="button"
                class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; Rules <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li class="pt-6">
              <a
                href="https://www.wuerth-it.it"
                target="_blank"
                rel="noopener noreferrer"
                class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; Würth IT Italy <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li>
              <a
                  href="https://www.wuerth-phoenix.com/wp-content/uploads/2025/07/event_privacy_policy_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; Event Privacy Policy <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li>
              <a
                  href="https://www.wuerth-phoenix.com/wp-content/uploads/2025/07/TCs-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-terminal-main group text-2xl xl:text-1.5xl xl:hover:text-terminal-text text-shadow-glow-medium"
              >
                &gt; Terms & Conditions <span class="hidden xl:group-hover:inline text-terminal-text">&lt;</span>
              </a>
            </li>
            <li class="pt-9">
              <span
                class="flex w-full text-terminal-main/50 text-1.5xl !leading-tight text-left text-shadow-glow-low"
              >
                © 2026 Würth IT Italy s.r.l.<br />VAT ID 01054690217
              </span>
            </li>
          </ul>
        </div>

        <div class="col-span-4 xl:col-span-6 justify-end flex">
          <h2
            class="text-terminal-main text-shadow-glow text-5xl xl:text-7.5xl text-left font-W95FA heading mb-40 xl:mb-0 mt-5 xl:mt-0"
            data-content="WP CTF 2026"
          >
            WP CTF 2026
          </h2>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import SponsorsReel from '@/components/elements/SponsorsReel.vue'

const emitter = inject('emitter')
function scrollPageTo(target: string): void {
  // @ts-ignore
  emitter.emit('scrollTo', target)
}
</script>
