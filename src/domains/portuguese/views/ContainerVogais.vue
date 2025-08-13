<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import ListaVogais from '../components/ListaVogais.vue'; // Importando o componente de vogais
import Header from '@/domains/reasoning/components/Header.vue'; // Importando o componente Header
import TitleCategories from '@/domains/user/components/TitleCategories.vue' // Importando o componente de título de categorias


</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <Header /> <!-- Componente Header -->
            <TitleCategories title="atividade" route="/att/roadMap" />

            <lista-vogais /> <!-- Componente de lista de vogais -->
        </ion-content>
    </ion-page>
</template>

<style scoped>
ion-content {
  --background: #f0f8ff; /* Fundo claro e agradável */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.lista-vogais {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
