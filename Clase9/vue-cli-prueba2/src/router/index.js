import {createWebHistory,createRouter} from 'vue-router'
import Binding from '../components/Binding.vue'
import Estructura from '../components/Estructura.vue'
import Atributos from '../components/Atributos.vue'
import Formulario from '../components/Formulario.vue'

const routes = [
    {path: '/',name: 'Home',component: Binding},
    {path: '/binding',name: 'Binding',component: Binding},
    {path: '/estructura',name: 'Estructura',component: Estructura},
    {path: '/atributos',name: 'Atributos',component: Atributos},
    {path: '/formulario',name: 'Formulario',component: Formulario}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router