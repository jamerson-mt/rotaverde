<script setup lang="ts">
import { getUserData } from "@/utils/localStorageUtils";
import TitleCategories from "@/domains/user/components/TitleCategories.vue";
import FormCard from "../components/FormCard.vue";
import { ref, onMounted } from "vue";

const user = getUserData();
const roles = user?.roles || [];
const isStudent = roles.includes("aluno");
const isTeacher = roles.includes("professor");

const availableForms = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:5198/api/form");
    const apiForms = await response.json();

    availableForms.value = apiForms.filter(
      (form: any) => form.userId == user.user?.id // 
    );
  } catch (error) {
    console.error("Erro ao buscar os formulários da API:", error);
  }
});

// Função para verificar se o formulário já existe e está associado ao userId
// const formExists = (nome: string) => {
//   return availableForms.value.some(
//     (form: any) => form.nome === nome && form.userId === user.user?.id
//   );
// };
</script>
<template>
  <div class="forms-container">
    <TitleCategories title="Formulários" route="/categorias" />
    <FormCard
      v-if="isStudent" 
      nome="simples"
      title="Formulário Alunos"
      link="/forms/dados-aluno"
    />
    <FormCard
      v-if="isTeacher "
      nome="docente"
      title="Formulário Docentes"
      link="/forms/dados-docente"
    />
    <FormCard
      v-if="isStudent "
      nome="dadosiniciais"
      title="Formulário Dados Iniciais"
      link="/forms/dados-iniciais"
    />
    <FormCard
      nome="termo"
      title="Termo de Livre Consentimento"
      link="/forms/termo-livre-consentimento"
    />
  </div>
</template>
<style scoped>
.forms-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-wrap: wrap;
  gap: 16px;
  padding: 10px;
  background-color: white;
}
</style>
