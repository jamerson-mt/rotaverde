import { RouteRecordRaw } from 'vue-router';
import Register from '../views/Register.vue';

const authRoutes: Array<RouteRecordRaw> = [
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

export default authRoutes;