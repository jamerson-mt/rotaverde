import { RouteRecordRaw } from "vue-router";

import ShowPerfil from "../views/perfil/ShowPerfil.vue";

import ShowCategories from "../views/categories/ShowCategories.vue";
import ShowOneCategory from "../../user/views/categories/ShowOneCategory.vue";

import ShowModules from "../../user/views/modules/ShowModules.vue";
import ShowOneModule from "../../user/views/modules/ShowOneModule.vue";

import ShowContents from "../../user/views/contents/ShowContents.vue";
import ShowOneContent from "../../user/views/contents/ShowOneContent.vue";

const userRoutes: Array<RouteRecordRaw> = [
  
  // --------- USER ROUTES --------- //
  { path: "/perfil", component: ShowPerfil },

  // --------- CATEGORIES ROUTES --------- //
  { path: "/user/categories", component: ShowCategories },
  { path: "/user/categories/:id", component: ShowOneCategory },

  // --------- MODULES ROUTES --------- //
  { path: "/user/modules", component: ShowModules },
  { path: "/user/modules/:id", component: ShowOneModule },
  { path: "/user/modules/c/:id", component: ShowModules },


  // --------- CONTENTS ROUTES --------- //
  { path: "/user/contents", component: ShowContents },
  { path: "/user/contents/:id", component: ShowOneContent },
  { path: "/user/contents/m/:id", component: ShowContents }, //mostra apenas as aulas do modulo selecionado


];

export default userRoutes;
