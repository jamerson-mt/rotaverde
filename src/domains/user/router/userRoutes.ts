import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomeView.vue";
import PerfilPage from "../views/Perfil.vue";
import Modulo from "../views/CategoriasAtividades.vue";
import RoadMap from "../views/RoadMap.vue";
import RoadMap1 from "../views/RoadMapLetras.vue";
import RoadMap2 from "../views/RoadMapAtividade.vue";
import RoadMap3 from "../views/RoadMapPalavra.vue";
import RoadMap4 from "../views/RoadMapFrase.vue";
import ShowContents from "@/domains/active/user/views/contents/ShowContents.vue";

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: PerfilPage,
  },
  // {
  //     path: '/att/modulo',
  //     name: 'Modulo de atividade',
  //     component: Modulo
  // },
  {
    path: "/categorias",
    name: "Modulo de atividade",
    component: Modulo,
  },
  {
    path: "/att/roadmap",
    name: "RoadMap",
    component: RoadMap,
  },
  {
    path: "/att/roadmapletras",
    name: "RoadMap1",
    component: RoadMap1,
  },
  {
    path: "/att/roadmapatividade",
    name: "RoadMap2",
    component: RoadMap2,
  },
  {
     path: "/att/roadmappalavra",
    name: "RoadMap3",
    component: RoadMap3,
  },
  {
     path: "/att/roadmapfrase",
    name: "RoadMap4",
    component: RoadMap4,
  },
  { path: "/user/contents/m/:id", component: ShowContents },
];

export default userRoutes;
