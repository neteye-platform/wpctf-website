<template>
  <nav class="py-5 xl:py-8 relative top-0 z-10 w-full">
    <ul class="flex w-full items-center justify-between">
      <li class="w-full xl:w-auto">
        <RouterLink to="/" class="text-white text-3xl text-nowrap xl:hover:text-terminal-text">
          <NavLogo />
        </RouterLink>
      </li>
      <li class="hidden xl:block">
        <ul class="flex gap-x-4">
          <li class="opacity-50 pointer-events-none">
            <RouterLink class="button button--transparent bg-transparent text-white uppercase" to="/">
              Scoreboard
            </RouterLink>
          </li>
          <li>
            <button @click="scrollPageTo('register')" type="button" class="button button--white bg-white text-black uppercase">
              Register
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

  import NavLogo from '@/components/elements/NavLogo.vue'
  import { inject } from 'vue';

  const emitter = inject('emitter');
  function scrollPageTo(target: string): void {
    // @ts-ignore
    emitter.emit('scrollTo', target);
  }

</script>

<style lang="postcss" scoped>


  .button{
    @apply inline-flex h-10 items-center px-7 text-xl relative;

    &--white{

      &:hover{
        @apply !bg-terminal-text/40 !text-terminal-text
      }
    }

    &--transparent{


      &:after{
        content: "";
        @apply absolute top-0 left-0 w-full h-full -z-10
      }

      &:hover{
        @apply text-terminal-text;

        &:after{
          @apply border-2 border-terminal-bg
        }
      }
    }
  }

</style>
