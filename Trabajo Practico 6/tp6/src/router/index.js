import {createWebHistory,createRouter} from 'vue-router'

import Formulario from '../components/Formulario.vue'
import Datos from '../components/Datos.vue'

const routes = [
    {path : '/',name: 'Home',component: Formulario},
    {path : '/formulario',name: 'Formulario',component: Formulario},
    {path : '/datos',name: 'Datos',component: Datos}
]   

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
