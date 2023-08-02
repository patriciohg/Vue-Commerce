//App
import { createApp } from 'vue'
import ProductList from './components/ProductList.vue'

//Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//Vue Router
import router from './router'
import App from './App.vue'
//Pinia
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    }
})


const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())
app.mount('#app')
