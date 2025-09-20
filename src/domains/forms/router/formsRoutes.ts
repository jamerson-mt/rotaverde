import { RouteRecordRaw } from "vue-router";
// Ajuste no caminho da importação
import FormsMain from "../views/FormsContainer.vue";
import FormDadosIniciais from "../views/FormDadosIniciais.vue";
const formsRoutes: Array<RouteRecordRaw> = [
  {
    path: "/forms",
    name: "forms",
    component: FormsMain,
  },
  {
    path: "/forms/dados-iniciais",
    name: "dados-iniciais",
    component: FormDadosIniciais,

  },
];

export default formsRoutes;
