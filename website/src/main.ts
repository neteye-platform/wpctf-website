import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import mitt from 'mitt'
const emitter = mitt()

import shell from 'vue-shell'
import TrackingService from "@/TrackingService/TrackingService";

const app = createApp(App)
app.provide('emitter', emitter)

app.use(createPinia())
app.use(router)
app.use(shell)
TrackingService.init(app, router)

app.mount('#app')
