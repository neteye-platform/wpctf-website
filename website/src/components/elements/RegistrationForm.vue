<template>
  <div>
    <div
      class="form-container success relative z-20 bg-terminal-bg/10 border border-terminal-text/30 shadow-[inset_0px_0px_60px_#FF139C1A] text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal"
    >
      <div class="leading-4">+---Registration-Form-------------------------+</div>
      <div class="left-start right-end !px-7">
        <div v-if="uiState === 'loading'" class="pt-7 pb-7 text-start">
          <div>[.] Preparing your registration access...</div>
        </div>

        <div v-else-if="uiState === 'error'" class="error-message text-start pt-7 pb-7">
          <div class="mb-5">[!] Error</div>
          <div>{{ errorMessage }}</div>
        </div>

        <div v-else class="text-start pt-7 pb-7">
          <div>[+] Access granted. You got it!</div>
          <div v-if="registrationLink" class="mt-4">
            <a :href="registrationLink" target="_blank" rel="noopener" class="hover:text-white underline">
              Go to the registration >
            </a>
          </div>
        </div>
      </div>
      <div>+---------------------------------------------+</div>
      <button
        v-if="uiState === 'error'"
        type="button"
        class="button hover:text-white uppercase flex justify-between w-full left-start right-end !p-4 !px-7"
        @click="getRegistrationLink"
      >
        <span class="flex">Retry</span>
        <span class="flex">></span>
      </button>
      <div v-if="uiState === 'error'">+---------------------------------------------+</div>
    </div>

    <div class="text-terminal-secondary text-shadow-glow text-xl hint text-left hidden">
      "Control can be an illusion. Sometimes you have to lose control to gain control. We're all living in a prison we can't see, touch, or smell. And if you want to break out, you have to break the rules." Mr.Robot
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCookies } from 'vue3-cookies'
import TrackingService from '@/TrackingService/TrackingService.ts'

type UiState = 'loading' | 'error' | 'success'

const uiState = ref<UiState>('loading')
const errorMessage = ref('')
const registrationLink = ref('')
const { cookies } = useCookies()
const registrationTokenCookieName = 'registration-token'
const registrationDomain = "https://2026.registration.wpctf.it"

const getAuthToken = async (): Promise<boolean> => {
  try {
    const authResponse = await fetch(`${registrationDomain}/auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!authResponse.ok) {
      uiState.value = 'error'
      errorMessage.value = 'Unable to authenticate right now. Please try again in a moment.'
      return false
    }

    const authData = (await authResponse.json()) as { token: string }
    const token = authData.token

    if (!token) {
      uiState.value = 'error'
      errorMessage.value = 'oh no! The token is missing..'
      return false
    }

    cookies.set(
      registrationTokenCookieName,
      token,
      undefined,
      '/',
      window.location.hostname,
      window.location.protocol === 'https:',
      'strict'
    )
    return true
  } catch (error: unknown) {
    uiState.value = 'error'
    if (error instanceof Error) {
      errorMessage.value = error.message
      return false
    }
    errorMessage.value = 'An unexpected error occurred.'
    return false
  }
}

const getRegistrationLink = async () => {
  try {
    uiState.value = 'loading'
    errorMessage.value = ''
    registrationLink.value = ''

    const token = cookies.get(registrationTokenCookieName)
    if (!token) {
      uiState.value = 'error'
      errorMessage.value = 'Oh no! The token is missing..'
      return
    }

    const response = await fetch(`${registrationDomain}/registration`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (response.status === 403) {
      uiState.value = 'error'
      errorMessage.value = "Oh no! You're not authorized ;)"
      return
    }

    if (response.status === 401) {
      uiState.value = 'error'
      errorMessage.value = 'Oh no! The token is invalid..'
      return
    }

    const data = await response.json()

    if (!response.ok) {
      uiState.value = 'error'
      errorMessage.value = data.error || 'An error occurred'
      return
    }

    if (typeof data.link !== 'string' || !data.link) {
      uiState.value = 'error'
      errorMessage.value = 'Registration link is missing from server response.'
      return
    }

    registrationLink.value = data.link
    uiState.value = 'success'
    TrackingService.eventRegistrationSuccess()
  } catch (error: unknown) {
    uiState.value = 'error'
    if (error instanceof Error) {
      errorMessage.value = error.message
      return
    }
    errorMessage.value = 'An unexpected error occurred.'
  }
}

const bootstrapRegistration = async () => {
  uiState.value = 'loading'
  errorMessage.value = ''
  registrationLink.value = ''

  const hasToken = await getAuthToken()
  if (!hasToken) {
    return
  }

  await getRegistrationLink()
}

onMounted(() => {
  bootstrapRegistration()
})
</script>

<style lang="postcss">
.hint {
  max-width: 23.5rem
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
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjRTcxM0ZGIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4=)
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
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjRTcxM0ZGIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4=)
    repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}
</style>
