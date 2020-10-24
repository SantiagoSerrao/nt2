import { createApp } from 'vue'
import App from './App.vue'
// importo lo que voy a usar
import router from './router'
import {VuelidatePlugin} from '@vuelidate/core'
import axios from 'axios'
import VueAxios from 'vue-axios'

// importo jquery y bootstrap
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// lo coloco en los use
createApp(App)
.use(router)
.use(VuelidatePlugin)
.use(VueAxios,axios)
.mount('#app')
