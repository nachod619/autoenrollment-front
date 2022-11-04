import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBase from '../views/MainBase.vue'
import MainInicio from '../views/Inicio/MainInicio.vue'
import AboutView from '../views/AboutView.vue'
import RoleMenu from '../views/RoleMenu.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainBase,
    children: [
      {
        path: '/home/inicio',
        name: 'MainInicio',
        component: MainInicio
      },
      { /* Se agrega la ruta de la nueva vista */
        path: '/home/inicio/about',
        name: 'AboutView',
        component: AboutView
      },
      { /* Se agrega la ruta de la nueva vista */
        path: '/home/inicio/RoleMenu',
        name: 'RoleMenu',
        component: RoleMenu
      }
    ]
  },
  {
    path: '/signupclient',
    name: 'ClientForm',
    component: () => import('../views/ClientForm.vue')
  },
  {
    path: '/rolemenu',
    name: 'Rolemenu',
    component: RoleMenu
  },
  {
    path: '/signupagent',
    name: 'AgentForm',
    component: () => import('../views/AgentForm.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

