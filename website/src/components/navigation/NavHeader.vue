<template>
  <nav class="py-5 xl:py-8 relative top-0 z-10 w-full text-shadow-glow-medium">
    <ul class="flex w-full items-center justify-between">
      <li class="w-full xl:w-auto">
        <a href="/" class="text-white text-3xl text-nowrap xl:hover:text-terminal-text">
          <NavLogo />
        </a>
      </li>
      <li class="hidden xl:block">
        <ul class="flex gap-x-4">
          <li>
            <a
              href="https://www.instagram.com/wp.ctf/"
              target="_blank"
              class="text-terminal-text uppercase hover:text-white"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_576_1253)">
                  <path
                    d="M21.6665 25.0062C21.6633 23.1655 23.153 21.6702 24.9933 21.667C26.834 21.6634 28.3296 23.1525 28.3331 24.9935C28.3367 26.8346 26.8469 28.3295 25.006 28.3331C23.1656 28.3366 21.6701 26.8472 21.6665 25.0062ZM19.8654 25.0097C19.8709 27.8458 22.1742 30.1397 25.0096 30.1342C27.8452 30.1287 30.1404 27.826 30.1349 24.99C30.1294 22.1549 27.8258 19.8597 24.9898 19.8652C22.1544 19.8707 19.8599 22.1744 19.8654 25.0097ZM29.1273 19.6546C29.1286 20.3169 29.667 20.8531 30.3293 20.8518C30.9919 20.8505 31.5281 20.3123 31.5271 19.6501C31.5258 18.9878 30.9874 18.4512 30.3248 18.4526C29.6622 18.4538 29.126 18.9923 29.1273 19.6546ZM20.9751 33.1468C20.0002 33.1044 19.4708 32.9423 19.118 32.8066C18.6507 32.6258 18.3173 32.409 17.9664 32.0608C17.6162 31.7111 17.3988 31.3787 17.2164 30.9124C17.0793 30.5596 16.9144 30.0308 16.8687 29.0559C16.8191 28.0019 16.8078 27.6857 16.803 25.0156C16.7978 22.3461 16.8075 22.0299 16.8535 20.9749C16.8953 20.0006 17.0583 19.4705 17.1937 19.118C17.3745 18.6502 17.5906 18.3174 17.9396 17.9665C18.2891 17.6156 18.6215 17.3989 19.0881 17.2165C19.4406 17.0787 19.9694 16.9151 20.944 16.8688C21.9986 16.8189 22.3145 16.8082 24.984 16.803C27.654 16.7978 27.9702 16.8072 29.0252 16.8536C29.9994 16.896 30.5295 17.0574 30.8817 17.1938C31.3492 17.3746 31.6826 17.5901 32.0332 17.9396C32.3838 18.2892 32.6012 18.621 32.7836 19.0886C32.9213 19.4401 33.0849 19.9695 33.131 20.9438C33.1812 21.9984 33.1925 22.3147 33.1974 24.9841C33.2025 27.6542 33.1928 27.9705 33.1465 29.0248C33.104 29.9997 32.9424 30.5295 32.8063 30.8826C32.6255 31.3496 32.4094 31.683 32.0601 32.0338C31.7108 32.3834 31.3784 32.6015 30.9115 32.7839C30.5596 32.9213 30.0303 33.0852 29.0563 33.1315C28.0017 33.1811 27.6858 33.1925 25.0154 33.1973C22.3459 33.2025 22.0301 33.1925 20.9751 33.1468ZM20.8585 15.0693C19.7944 15.1195 19.0677 15.2899 18.4326 15.5388C17.7753 15.7951 17.218 16.1385 16.6637 16.6951C16.1086 17.2521 15.7678 17.8103 15.5134 18.4684C15.2672 19.1051 15.1003 19.8321 15.0533 20.8968C15.0067 21.9635 14.996 22.3037 15.0012 25.0191C15.0064 27.7343 15.0183 28.0751 15.0692 29.1421C15.1201 30.2058 15.2899 30.9322 15.5387 31.5676C15.7953 32.225 16.1384 32.782 16.6954 33.3367C17.252 33.8913 17.8106 34.2319 18.469 34.4866C19.105 34.7324 19.8323 34.9 20.8967 34.9466C21.9633 34.9936 22.3038 35.004 25.0186 34.9988C27.7347 34.9936 28.0753 34.9816 29.1419 34.9311C30.2059 34.8802 30.9319 34.7098 31.5676 34.4616C32.225 34.2044 32.7823 33.8619 33.3367 33.3049C33.891 32.7482 34.2319 32.1897 34.4862 31.5313C34.7325 30.8953 34.9 30.1679 34.9463 29.1042C34.993 28.0369 35.004 27.696 34.9988 24.9809C34.9936 22.2654 34.9813 21.9252 34.9308 20.8589C34.8802 19.7942 34.7098 19.0681 34.4613 18.4324C34.2044 17.7751 33.8616 17.2184 33.3049 16.6634C32.7483 16.109 32.1897 15.7675 31.5314 15.5138C30.895 15.2676 30.168 15.0997 29.1036 15.0537C28.037 15.0064 27.6965 14.9961 24.9807 15.0012C22.2656 15.0064 21.9251 15.0181 20.8585 15.0693Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_576_1253"
                    x="0"
                    y="3.05176e-05"
                    width="50"
                    height="50"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_576_1253"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_576_1253"
                      result="effect2_dropShadow_576_1253"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_576_1253"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/JAPhDT8knm"
              target="_blank"
              class="text-terminal-text uppercase hover:text-white"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_576_1252)">
                  <path
                    d="M31.9419 16.2559C30.6275 15.661 29.24 15.2389 27.8149 15.0002C27.6214 15.3432 27.4443 15.702 27.2879 16.0636C26.5298 15.9504 25.7643 15.8934 24.9977 15.8932C24.2323 15.8932 23.4631 15.9507 22.7072 16.0621C22.5528 15.7014 22.3734 15.3438 22.1788 15C20.7556 15.2401 19.3646 15.6647 18.0509 16.2584C15.4389 20.0822 14.731 23.8103 15.0849 27.4856C16.6144 28.6035 18.3262 29.4537 20.146 29.9993C20.5541 29.4542 20.9197 28.8738 21.23 28.2699C20.6379 28.0515 20.0664 27.7817 19.5224 27.4635C19.6655 27.3607 19.8056 27.2549 19.9408 27.1521C21.5227 27.8873 23.2512 28.2708 25 28.2708C26.7488 28.2708 28.4773 27.8873 30.0592 27.152C30.1961 27.2625 30.3361 27.3684 30.4777 27.4633C29.9326 27.7821 29.3601 28.0527 28.7669 28.2719C29.0783 28.8772 29.441 29.4553 29.851 30C31.6724 29.4561 33.3856 28.6059 34.9154 27.4867L34.915 27.4871C35.3303 23.225 34.2055 19.5311 31.9419 16.2559ZM21.6777 25.2253C20.6914 25.2253 19.8765 24.3396 19.8765 23.2499C19.8765 22.1603 20.663 21.2668 21.6745 21.2668C22.686 21.2668 23.4945 22.1603 23.4772 23.2499C23.4599 24.3396 22.6829 25.2253 21.6777 25.2253ZM28.3223 25.2253C27.3344 25.2253 26.5227 24.3396 26.5227 23.2499C26.5227 22.1603 27.3092 21.2668 28.3223 21.2668C29.3353 21.2668 30.1376 22.1603 30.1203 23.2499C30.103 24.3396 29.3275 25.2253 28.3223 25.2253Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_576_1252"
                    x="0"
                    y="0"
                    width="50"
                    height="45"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_576_1252"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_576_1252"
                      result="effect2_dropShadow_576_1252"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_576_1252"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/WuerthPhoenix/wpctf2025"
              target="_blank"
              class="text-terminal-text uppercase hover:text-white"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_576_1256)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.9994 15.0035C19.4778 15.0035 15 19.5935 15 25.2552C15 29.7851 17.8649 33.6266 21.8382 34.9828C22.3383 35.0778 22.5221 34.76 22.5221 34.489C22.5221 34.2446 22.5121 33.437 22.5081 32.5811C19.7259 33.2013 19.1394 31.371 19.1394 31.371C18.6846 30.1858 18.0291 29.8706 18.0291 29.8706C17.1219 29.2337 18.0982 29.2477 18.0982 29.2477C19.1021 29.3196 19.6306 30.3035 19.6306 30.3035C20.5231 31.8708 21.9707 31.4171 22.5409 31.1556C22.631 30.493 22.8894 30.0405 23.1758 29.7843C20.9545 29.5259 18.6197 28.6464 18.6197 24.7178C18.6197 23.5989 19.0109 22.6839 19.6498 21.9664C19.5458 21.7076 19.2032 20.6655 19.7462 19.2536C19.7462 19.2536 20.5858 18.9778 22.497 20.3045C23.2943 20.0778 24.1494 19.9635 24.9987 19.9598C25.8487 19.9635 26.7054 20.0774 27.5037 20.3045C29.4123 18.9786 30.2512 19.2536 30.2512 19.2536C30.7949 20.6659 30.4539 21.7087 30.3498 21.9664C30.9909 22.6839 31.3788 23.5989 31.3788 24.7178C31.3788 28.6555 29.0388 29.5213 26.8128 29.7752C27.1716 30.0931 27.4919 30.7171 27.4919 31.6729C27.4919 33.0439 27.4805 34.1488 27.4805 34.486C27.4805 34.7588 27.6606 35.0778 28.1677 34.9779C32.1388 33.6209 35 29.779 35 25.2517C35 19.5908 30.5229 15 25.0002 15L24.9995 15.0034L24.9994 15.0035Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_576_1256"
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_576_1256"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.74902 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_576_1256"
                      result="effect2_dropShadow_576_1256"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_576_1256"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
          </li>
          <li class="flex items-center">
            <a href="/sponsors" class="button text-terminal-text uppercase hover:text-white">
              Sponsors
            </a>
          </li>
          <li class="flex items-center">
            <a
              href="/#register"
              @click="scrollPageTo('register')"
              type="button"
              class="button bg-terminal-text text-black uppercase hover:bg-white"
            >
              Register
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavLogo from '@/components/elements/NavLogo.vue'
import { inject } from 'vue'

const emitter = inject('emitter')
function scrollPageTo(target: string): void {
  // @ts-expect-error Mitt
  emitter.emit('scrollTo', target)
}
</script>

<style lang="postcss" scoped>
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
