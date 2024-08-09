import { RouteRecordRaw } from 'vue-router';
import ProfHome from '../views/ProfHome.vue';

const userRoutes: Array<RouteRecordRaw> = [
    {
        path: "/professor",
        name: 'Home Professor',
        component: ProfHome
    }
]

export default userRoutes;