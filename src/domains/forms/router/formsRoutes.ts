import { RouteRecordRaw } from "vue-router";
import FormsMain from "../views/FormsContainer.vue";
import FormDadosIniciais from "../views/FormDadosIniciais.vue";
import TermoConsentimento from "../views/TermoConsentimento.vue";
import FormAlunos from "../views/FormAlunos.vue";
import FormDocentes from "../views/FormDocentes.vue";
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
  {
    path: "/forms/dados-aluno",
    component: FormAlunos,
  },
  {
    path: "/forms/dados-docente",
    component: FormDocentes,
  },
];

export default formsRoutes;
