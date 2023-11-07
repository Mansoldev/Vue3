import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

import store from '@/store/store'

import './assets/main.css'

store.startLoadingPokemons()

const app = createApp(App)

app.use(router)
//app.use(VueQueryPlugin)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                staleTime: 1000 * 120, //2 minutes queries in cache,
                refetchOnReconnect: 'always' //On reconnect the app > all queries will be launch again
            }
        }
    }
})

app.mount('#app')
