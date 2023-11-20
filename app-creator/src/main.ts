import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far);

config.styleDefault = "fa-regular";

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())

app.mount('#app')
