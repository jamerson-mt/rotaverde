import { RouteRecordRaw } from 'vue-router';
import ProfHome from '../ProfHome.vue';
import ProfTurmas from '../ProfTurmas.vue';
import ProfTurmasUpdate from '../ProfTurmasUpdate.vue';

const userRoutes: Array<RouteRecordRaw> = [
    {
        path: "/professor",
        name: 'Home Professor',
        component: ProfHome
    },
    {
        path: "/professor/create-turma",
        name: 'professor-turma-create',
        component: ProfTurmas
    },
    {
        path: "/professor/turmas/:turmaId",
        name: 'professor-turma-update',
        component: ProfTurmasUpdate
    }
]

export default userRoutes;