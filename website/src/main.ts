import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'

import App from './App.vue'
import router from './router'

import { emitterKey, type AppEvents } from '@/events'
import TrackingService from '@/TrackingService/TrackingService'

const app = createApp(App)
app.provide(emitterKey, mitt<AppEvents>())

app.use(createPinia())
app.use(router)
TrackingService.init(app)

app.mount('#app')
