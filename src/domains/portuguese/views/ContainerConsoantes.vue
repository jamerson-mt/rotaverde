<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import ListaConsoantes from '../components/ListaConsoantes.vue'; 
import Header from '@/domains/reasoning/components/HeaderTop.vue'; 
import TitleCategories from '@/domains/user/components/TitleCategories.vue';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <Header /> 
            <TitleCategories title="atividade" route="/att/roadMap" />
            <lista-consoantes /> 
        </ion-content>
    </ion-page>
</template>

<style scoped>
ion-content {
  --background: #f0f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.lista-consoantes {
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
