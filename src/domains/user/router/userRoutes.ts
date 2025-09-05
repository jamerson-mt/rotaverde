import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import PerfilPage from '../views/Perfil.vue';
import Modulo from '../views/CategoriasAtividades.vue';
import RoadMap from '../views/RoadMap.vue';
import ShowContents from '@/domains/active/user/views/contents/ShowContents.vue';
import Form from '../views/Form.vue';

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
    // {
    //     path: '/att/modulo',
    //     name: 'Modulo de atividade',
    //     component: Modulo
    // }, 
    {
        path: '/categorias',
        name: 'Modulo de atividade',
        component: Modulo
    },
    {
      path: '/att/roadmap',
      name: 'RoadMap',
      component: RoadMap
    },

    { path: '/user/form', component: Form },
    { path: "/user/contents/m/:id", component: ShowContents }
]

export default userRoutes;