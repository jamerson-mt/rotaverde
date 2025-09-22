import { RouteRecordRaw } from 'vue-router';
import ProfHome from '../ProfHome.vue';
import ProfTurmas from '../ProfTurmas.vue';

const userRoutes: Array<RouteRecordRaw> = [
    {
        path: "/professor",
        name: 'Home Professor',
        component: ProfHome
    },
    {
        path: "/professor/create-turma",
        name: 'professor-turma',
        component: ProfTurmas
    }
]

export default userRoutes;