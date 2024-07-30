import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Home.vue';
import PerfilPage from '../views/Perfil.vue';
import Welcome from '../views/Welcome.vue';
import EscritaPort from '../views/Atividades/Portugues/Escrita.vue';
import AttTec from '../views/Atividades/Tecnologia/Att.vue';
import Memoria from '../views/Atividades/Raciocinio/Memoria.vue';
import Modulo from '../views/Atividades/Modulo.vue';
import CacaPalavras from '../views/Atividades/Portugues/CacaPalavras.vue';
import Silabario from '../views/Atividades/Portugues/Silabario.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Person from '@/views/Person.vue';
import Avatar from '@/views/Avatar.vue';
import RoadMap from '@/views/Atividades/RoadMap.vue';
import ProfHome from '@/views/Professor/ProfHome.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilPage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
  },
  {
    path: '/att/tec',
    name: 'atividade de tecnologia',
    component: AttTec
  },
  {
    path: '/att/rl/memoria',
    name: 'atividade memória',
    component: Memoria
  },
  {
    path: '/att/modulo',
    name: 'Modulo de atividade',
    component: Modulo
  },
  {
    path: '/att/roadmap',
    name: 'RoadMap',
    component: RoadMap
  },
  {
    path: '/cacapalavras',
    name: 'Atividade Caça Palavras',
    component: CacaPalavras
  },
  {
    path: '/silabario',
    name: 'atividade das silabas',
    component: Silabario
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: Avatar
  },
  {
    path: '/home/professor',
    name: 'Home Professor',
    component: ProfHome
  }
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
