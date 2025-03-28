import { RouteRecordRaw } from 'vue-router';
import CacaPalavras from '../views/CacaPalavras.vue';
import Silabario from '../views/Silabario.vue';
import EscritaPort from '../views/Escrita.vue';
import Letras from '../views/Letras.vue';

const portugueseRoutes: Array<RouteRecordRaw> = [
    { path: '/att/pt/escrita', name: 'Escrita Portugues', component: EscritaPort },
    { path: '/att/pt/cacapalavras', name: 'Atividade Caça Palavras', component: CacaPalavras },
    { path: '/att/pt/silabario', name: 'atividade das silabas', component: Silabario },
    { path: '/att/pt/letras', name: 'Atividade Letras', component: Letras }
]

export default portugueseRoutes;