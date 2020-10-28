import {createWebHistory,createRouter} from 'vue-router'

import Formulario from '../components/Formulario.vue'
import Datos from '../components/Datos.vue'
import Choice from '../components/Choice.vue'


const routes = [
    {path : '/',name: 'Home',component: Formulario},
    {path : '/formulario',name: 'Formulario',component: Formulario},
    {path : '/datos',name: 'Datos',component: Datos},
    {path : '/choice',name: 'Choice',component: Choice}
]   

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
