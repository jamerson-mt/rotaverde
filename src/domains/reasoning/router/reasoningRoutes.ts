import { RouteRecordRaw } from 'vue-router';
import Memoria from '../views/Memoria.vue';

const reasoningRoutes: Array<RouteRecordRaw> = [
    {
        path: '/att/rl/memoria',
        name: 'atividade memória',
        component: Memoria
    }
]

export default reasoningRoutes;