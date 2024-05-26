import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Home.vue';
import Start from '../views/Start.vue';
import Loading from '../views/Loading.vue';
import EscritaPort from '../views/Atividades/Portugues/Escrita.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/att/port/escrita',
    name: 'Escrita Portugues',
    component: EscritaPort
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
