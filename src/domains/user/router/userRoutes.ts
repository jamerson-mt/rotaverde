import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Home.vue';
import PerfilPage from '../views/Perfil.vue';
import Modulo from '../views/Modulo.vue';
import RoadMap from '../views/RoadMap.vue';
import ShowContents from '@/domains/active/user/views/contents/ShowContents.vue';

const userRoutes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: PerfilPage
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

    { path: "/user/contents/m/:id", component: ShowContents }
]

export default userRoutes;