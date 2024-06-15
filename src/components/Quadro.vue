<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  quadro: {
    line1: string[];
    line2: string[];
    line3: string[];
    line4: string[];
    line5: string[];
    line6: string[];
  };
  palavras: {
    word1: string[];
    word2: string[];
    word3: string[];
    word4: string[];
  };
}>(); 

const letraAcendida = new Array(6)
  .fill(false)
  .map(() => new Array(props.quadro.line1.length).fill(false));

const acenderLetra = (linhaIndex: number, celulaIndex: number) => {
  letraAcendida[linhaIndex][celulaIndex] = true;
};

const apagarLetra = (linhaIndex: number, celulaIndex: number) => {
  letraAcendida[linhaIndex][celulaIndex] = false;
};
</script>

<template>
  <div class="content">
    <h1>Caça Palavras</h1>
    <div class="quadro">
      <div v-for="(linha, linhaIndex) in [props.quadro.line1, props.quadro.line2, props.quadro.line3, props.quadro.line4, props.quadro.line5, props.quadro.line6]" :key="linhaIndex" class="linha">
        <div v-for="(celula, celulaIndex) in linha" :key="celulaIndex" class="celula">
          <div
            v-for="(letra, letraIndex) in celula"
            :key="letraIndex"
            class="letra"
            :class="{ 'letra-acendida': letraAcendida[linhaIndex][celulaIndex] }"
            @mouseenter="acenderLetra(linhaIndex, celulaIndex)"
            @mouseleave="apagarLetra(linhaIndex, celulaIndex)"
            @touchstart.prevent="acenderLetra(linhaIndex, celulaIndex)"
            @touchend.prevent="apagarLetra(linhaIndex, celulaIndex)"
          >
            {{ letra }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.quadro {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.linha {
  display: flex;
  gap: 10px;
}

.celula {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
}

.letra {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.letra:hover{
  background-color: yellow;

}

.letra-acendida {
  background-color: yellow;
}
</style>
