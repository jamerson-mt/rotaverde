<script setup lang="ts">
import TitleCategories from "@/domains/user/components/TitleCategories.vue";
import FormCard from "../components/FormCard.vue";
</script>
<template>
  <div class="forms-container">
    <TitleCategories title="Formulários" route="/categorias" />
    <FormCard title="Formulário Alunos" link="/forms/dados-aluno" />
    <FormCard title="Formulário Docentes" link="/forms/dados-docente" />
    <FormCard title="Formulário Dados Iniciais" link="/forms/dados-iniciais" />
    <FormCard title="Termo de Livre Consentimento" link="/forms/termo-livre-consentimento" />
   
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
