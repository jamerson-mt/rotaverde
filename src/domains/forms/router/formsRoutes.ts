import { RouteRecordRaw } from "vue-router";
// Ajuste no caminho da importação
import FormsMain from "../views/FormsContainer.vue";
import FormDadosIniciais from "../views/FormDadosIniciais.vue";
import TermoConsentimento from "../views/TermoConsentimento.vue";
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
  {
    path: "/forms/termo-livre-consentimento",
    name: "termo-livre-consentimento",
    component: TermoConsentimento,

  },

];

export default formsRoutes;
