import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Inicio from './components/InicioSesion.vue'
import Tarjeta from './components/DatosTarjeta.vue'
import Butacas from './components/Butacas.vue'
import Confirmacion from './components/Confirmacion.vue'
import DatosCompra from './components/DatosCompra.vue'

Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/tarjeta',
      name: 'tarjeta',
      component: Tarjeta
    },
    {
      path: '/butacas',
      name: 'butacas',
      component: Butacas
    },
    {
      path: '/confirmacion',
      name: 'confirmacion',
      component: Confirmacion
    },
    {
      path: '/datosDeLaCompra',
      name: 'datosDeLaCompra',
      component: DatosCompra
    },
  ]
})


