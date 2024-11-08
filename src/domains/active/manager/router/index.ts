import { RouteRecordRaw } from "vue-router";

import ShowCategories from "../views/categories/ShowCategories.vue";
import ShowOneCategory from "../views/categories/ShowOneCategory.vue";
import ShowModules from "../views/modules/ShowModules.vue";
import ShowOneModule from "../views/modules/ShowOneModule.vue";
import EditModule from "../../manager/views/modules/EditModule.vue"
import ShowContents from "../views/contents/ShowContents.vue";
import ShowOneContent from "../views/contents/ShowOneContent.vue";
import CreateContent from "../../manager/views/contents/CreateContent.vue";

const userRoutes: Array<RouteRecordRaw> = [

  // ---------- CATEGORIES ROUTES ------------ //
  { path: "/manager/categories", component: ShowCategories },
  { path: "/manager/categories/:id", component: ShowOneCategory },

  // ------------ MODULES ROUTES ------------- //
  { path: "/manager/modules", component: ShowModules },
  { path: "/manager/modules/:id", component: ShowOneModule },
  { path: "/manager/modules/edit/:id", component: EditModule },
  { path: "/manager/modules/c/:id", component: ShowModules },


  // ------------ CONTENTS ROUTES -------------- //
  { path: "/manager/contents", component: ShowContents },
  { path: "/manager/contents/create", component: CreateContent },
  { path: "/manager/contents/edit/:id", component: ShowOneContent },
  { path: "/manager/contents/m/:id", component: ShowContents }, //mostra apenas as aulas do modulo selecionado



];

export default userRoutes;
