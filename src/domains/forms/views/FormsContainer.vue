<script setup lang="ts">
import { getUserData } from "@/utils/localStorageUtils";
import TitleCategories from "@/domains/user/components/TitleCategories.vue";
import FormCard from "../components/FormCard.vue";

const user = getUserData();
const roles = user.user?.roles || [];
const isStudent = roles.includes("aluno");
const isTeacher = roles.includes("professor");
</script>
<template>
  <div class="forms-container">
    <TitleCategories title="Formulários" route="/categorias" />
    <FormCard v-if="isStudent" title="Formulário Alunos" link="/forms/dados-aluno" />
    <FormCard v-if="isTeacher" title="Formulário Docentes" link="/forms/dados-docente" />
    <FormCard v-if="isStudent" title="Formulário Dados Iniciais" link="/forms/dados-iniciais" />
    <FormCard  title="Termo de Livre Consentimento" link="/forms/termo-livre-consentimento" />
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
