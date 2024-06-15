<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import HeaderLevels from "@/components/header/HeaderLevels.vue";
import NavBotton from "@/components/NavBotton.vue";
import Quadro from "@/components/Quadro.vue";
import { Portugues, portugues } from "../../../../public/ts/jogos/cacaPalavras";

const { frame, words } = portugues[0];

const letraAcendida = new Array(frame.line1.length).fill(false);

const acenderLetra = (index: number) => {
  letraAcendida[index] = true;
};
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <HeaderLevels />
      </div>
      <div class="content">
        <div class="quadro">
          <Quadro :quadro="frame" :palavras="words" />
        </div>
        <div class="palavras">
          <div v-for="(palavra, palavraIndex) in words" :key="palavraIndex">
            <p>{{ palavra.join('') }}</p>
          </div>
        </div>
      </div>
    </ion-content>
    <div id="navButton">
      <NavBotton />
    </div>
  </ion-page>
</template>


<style scoped>
.letra-acendida {
  background-color: yellow; 
}

.palavras {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.palavras p {
  margin: 0 10px;
  background-color: aqua;
  padding: 5px 10px;
  border-radius: 10px;
}

</style>
