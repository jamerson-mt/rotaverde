<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import HeaderLevels from "@/components/header/HeaderLevels.vue";
import NavBotton from "@/components/NavBotton.vue";
import Quadro from "@/components/Quadro.vue";
import { Portugues, portugues } from "../../../../public/ts/jogos/cacaPalavras";

const { frame, words } = portugues[0];

const refresh = () => {
  document.querySelectorAll(".aviso").forEach(function (valor) {
    valor.setAttribute("style", "opacity:0; z-index:0;");
  });
  
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
            <p :class="palavra.join('').toLowerCase()">{{ palavra.join("") }}</p>
          </div>
        </div>
      </div>
      <div class="aviso">
        <p class="sucesso">realizado com sucesso!</p>

        <div class="refresh" @click="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M6.5 3.5c-2.412 1.378-4 4.024-4 7a8 8 0 0 0 8 8m4-1c2.287-1.408 4-4.118 4-7a8 8 0 0 0-8-8"
              />
              <path d="M6.5 7.5v-4h-4m12 10v4h4" />
            </g>
          </svg>
        </div>
      </div>
    </ion-content>
    <div id="navButton">
      <NavBotton />
    </div>
  </ion-page>
</template>

<style scoped>
.refresh {
  margin: 0 auto;
}
.aviso {
  display: flex;
  flex-direction: column;
  top: 200px;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  background-color: green;
  opacity: 0;
  z-index: 0;
  text-align: center;
}
.sucesso {
  font-size: 2em;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
  background-color: transparent;
}

.letra-acendida {
  background-color: yellow;
}

.palavras {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.palavras p {
  margin: 0 10px;
  background-color: aqua;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>
