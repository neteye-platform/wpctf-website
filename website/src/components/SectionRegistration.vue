<template>
  <section
    id="registration"
    class="bg-[#12121A] flex flex-col w-full px-5 xl:pl-0 xl:pr-10 relative overflow-hidden !mt-0 x z-40 crt pt-32 pb-32 md:pb-60 md:pt-60 "
    data-scroll="register"
  >
    <div
      class="w-full flex justify-center sm:max-w-xl xl:max-w-full mx-auto"
    >
      <div
        class="flex text-white flex-col self-center registration-container text-center"
        v-if="isRegistrationOpen()"
      >
        <h2
          class="text-terminal-main text-shadow-glow text-7xl xl:text-5.25xl font-W95FA heading pb-10 xl:pb-10 registration-title"
          data-content="Registration"
        >
          Registration
        </h2>
        <div class="text-terminal-text/60 text-3xl text relative text-shadow-glow-low justify-center">
          <RegistrationForm />
        </div>
      </div>

      <div
          class="flex text-white flex-col w-full xl:w-128 self-center registration-container text-center"
          v-else
      >
        <div class="w-full">
          <h2
              class="text-terminal-text text-shadow-glow text-7xl xl:text-5.25xl font-W95FA heading pb-10 xl:pb-10"
              data-content="Registration"
          >
            Registration
          </h2>

          <div class="text-terminal-text text-3xl text relative text-shadow-glow-low">
            <div class="relative z-20 text-left text-terminal-text text-xl !leading-6 formatted-text font-terminal w-fit mx-auto">
                <div>+--------------------------------------------------+</div>
                <div class="flex justify-between"><span>| &nbsp;REGISTRATION WILL SOON OPEN</span><span>|</span></div>
                <div class="flex justify-between"><span>| &nbsp;COME BACK LATER</span><span>|</span></div>
                <div class="flex justify-between"><span>|</span><span>|</span></div>
                <div class="flex justify-between"><span>|</span><span>|</span></div>
                <div class="flex justify-between"><span>|</span><span>|</span></div>
                <div class="flex justify-between"><span>|</span><span>|</span></div>
                <div class="flex justify-between"><span>|</span><span>|</span></div>
                <div>+--------------------------------------------------+</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import RegistrationForm from "@/components/elements/RegistrationForm.vue";

function isRegistrationOpen() {
  const registrationOpenDate = new Date('2026-07-14T00:00:00Z');
  const currentDate = new Date();
  return currentDate >= registrationOpenDate;
}
</script>

<style lang="postcss" scoped>
.registration-title::before {
  left: 20%
}

.button {
  @apply inline-flex h-10 items-center px-7 text-xl relative;

  &--white {
    &:hover {
      @apply !bg-terminal-text/40 !text-terminal-text;
    }
  }

  &--transparent {
    &:after {
      content: '';
      @apply absolute top-0 left-0 w-full h-full -z-10;
    }

    &:hover {
      @apply text-terminal-text;

      &:after {
        @apply border-2 border-terminal-bg;
      }
    }
  }
}
</style>
