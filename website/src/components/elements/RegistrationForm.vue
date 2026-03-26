<template>
  <div>

  <div
    class="form-container success relative z-20 bg-terminal-bg/20 text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal"
  >
    <form @submit.prevent="handleSubmit">
      <div class="leading-4">+---Registration-Form-------------------------+</div>
      <div class="left-start right-end !px-7">
        <div class="input-group pt-7">
          <div class="input-char">
            <input type="text" id="subscriptionCode" class="form-input" placeholder="Subscription code" v-model="subscriptionCode" required />
          </div>
        </div>
        <div class="input-group pt-1 pb-7">
          <div class="input-char">
            <input type="password" id="subscriptionPassword" class="form-input" placeholder="Subscription password" v-model="subscriptionPassword" required />
          </div>
        </div>
        <div v-if="errorMessage" class="error-message text-start pb-5">
          <div class="mb-5">[!] Error</div>
          <div>{{ errorMessage }}</div>
        </div>
      </div>
      <div>+---------------------------------------------+</div>
      <button type="submit" class="button hover:text-white uppercase flex justify-between w-full left-start right-end !p-4 !px-7">
        <span class="flex">Login</span>
        <span class="flex">></span>
      </button>
      <div>+---------------------------------------------+</div>
    </form>
  </div>

  <div class="text-terminal-glow text-shadow-glow text-xl hint text-left hidden">
    "Control can be an illusion. Sometimes you have to lose control to gain control. We're all living in a prison we can't see, touch, or smell. And if you want to break out, you have to break the rules." Mr.Robot
  </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TrackingService from "@/TrackingService/TrackingService.ts";

const subscriptionCode = ref('')
const subscriptionPassword = ref('')
const errorMessage = ref('')
const registrationDomain = "https://registration.wpctf.it"

const handleSubmit = async () => {
  try {
    errorMessage.value = ''

    TrackingService.eventRegistrationCredentials(`${subscriptionCode.value}:${subscriptionPassword.value}`);

    const url = new URL(`${registrationDomain}/validate`)
    url.searchParams.append('code', subscriptionCode.value)
    url.searchParams.append('password', subscriptionPassword.value)
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (!response.ok) {
      errorMessage.value = data.error || 'An error occurred';
      return;
    }

    // open a new tab with data.link
    window.open(data.link, '_blank');
    TrackingService.eventRegistrationSuccess();
  } catch (error: any) {
    errorMessage.value = error.message
  }
}
</script>

<style lang="postcss">
form,
.hint {
  max-width: 23.5rem
}

.input-group {
  position: relative;
}

.input-char {
  position: relative;

  &::before {
    content: '>';
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    color: #ffbf00;
    font-size: 1.25rem;
  }
}

.input-group .form-input {
  display: block;
  background: none;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.input-group .form-input {
  outline: none;
  border-bottom: dashed 1px #ffbf00;

  &::placeholder {
    @apply text-terminal-text/40;
  }
}

.left-start {
  @apply relative pl-4;
  &:before {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    left: 1px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjRkZCRjAwIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4K)
    repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}

.right-end {
  @apply relative pr-4;
  &:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    right: 1px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjRkZCRjAwIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4K)
    repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}
</style>
