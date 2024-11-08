import { RouteRecordRaw } from 'vue-router';
import AttTec from '../views/Att.vue';

const technologyRoutes: Array<RouteRecordRaw> = [
    {
        path: '/att/tec',
        name: 'atividade de tecnologia',
        component: AttTec
    }
]

export default technologyRoutes;