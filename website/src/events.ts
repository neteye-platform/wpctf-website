import type { Emitter } from 'mitt'
import { inject, type InjectionKey } from 'vue'

export type AppEvents = {
  readonly scrollTo: string
}

export type AppEmitter = Emitter<AppEvents>

export const emitterKey: InjectionKey<AppEmitter> = Symbol('emitter')

export class MissingEmitterProviderError extends Error {
  readonly name = 'MissingEmitterProviderError'

  constructor() {
    super(
      'Missing emitter provider. Make sure app.provide(emitterKey, mitt<AppEvents>()) runs in main.ts before useEmitter().'
    )
  }
}

export function useEmitter(): AppEmitter {
  const emitter = inject(emitterKey)

  if (emitter === undefined) {
    throw new MissingEmitterProviderError()
  }

  return emitter
}
