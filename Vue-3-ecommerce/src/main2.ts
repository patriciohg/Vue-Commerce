import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Contador from './Contador.vue'
import router from './router'

const app = createApp(Contador)

app.use(createPinia())
app.use(router)

app.mount('#app')
