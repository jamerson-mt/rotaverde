<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import Card from '@/domains/user/components/Card.vue';
import Header from '@/domains/reasoning/components/Header.vue';
import FalarComponent from '@/components/FalarComponent.vue';
import { inject, ref } from "vue";

const isPlaying = inject("isPlaying"); // Certifique-se de que o estado está sendo injetado corretamente

// Defina a interface para o tipo do FalarComponent
interface FalarComponentType {
    falar(language: string, subject: string, module: string, route: string): void;
    stopAudio(): void;
}

// Tipar a referência do FalarComponent
const falarComponent = ref<FalarComponentType | null>(null);

function handleFalar(language: string, subject: string, module: string, route: string) {
    if (falarComponent.value) {
        falarComponent.value.falar(language, subject, module, route);
    } else {
        console.error('FalarComponent não está disponível.');
    }
}

function stopAudio() {
    if (falarComponent.value) {
        falarComponent.value.stopAudio();
    } else {
        console.error('FalarComponent não está disponível.');
    }
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <Header />
      </div>

      <div id="container">
        <Card
          @click="handleFalar('pt', 'portugues', 'seusmodulos', '/categorias')"
          title="Português" image="img/curuja.png" link="/home?q=pt" link2="/att/roadMap" bgc="#4DC591" />
          
        <Card
          @click="handleFalar('mt', 'matematica', 'seusmodulos', '/categorias')"
          title="Matemática" image="img/curuja.png" link="/home?q=pt" link2="/att/roadMap" bgc="#4DC591" />

        <Card
          @click="handleFalar('cc', 'ciencias', 'seusmodulos', '/categorias')"
          title="Ciências" image="img/curuja.png" link="/home?q=pt" link2="/att/roadMap" bgc="#4DC591" />

        <!-- Certifique-se de que o componente está sempre presente -->
        <FalarComponent ref="falarComponent" />

        <!-- Exibe o GIF e o botão "Cancelar" quando o áudio está tocando -->
        <div v-if="isPlaying" class="audio-overlay">
          <img src="/public/img/speaker.gif" alt="Executando áudio" />
          <button class="cancel-button" @click="stopAudio">Cancelar</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
#container {
  display: flex;
  margin-top: 100px;
  justify-content: space-around;
  padding: 0px 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.audio-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.audio-overlay img {
  width: 100px;
  height: 100px;
}

.cancel-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
