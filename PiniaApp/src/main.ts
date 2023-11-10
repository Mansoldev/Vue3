import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from 'node_modules/@tanstack/vue-query/build/legacy'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60, //1 minutes queries in cache,
            }
        }
    }
})

app.mount('#app')
