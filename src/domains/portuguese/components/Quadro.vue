<script setup lang="ts">
import router from "@/router";
import { defineProps, reactive } from "vue";


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

const contador = 0;

let letraAcendida = reactive(
  [
    props.quadro.line1,
    props.quadro.line2,
    props.quadro.line3,
    props.quadro.line4,
    props.quadro.line5,
    props.quadro.line6,
  ].map((linha) => linha.map(() => false))
);

const confirme = (() =>{
  if(o1 && o2 && o3 && o4){
    document.querySelectorAll(".aviso").forEach(function (valor) {
      valor.setAttribute("style", "opacity:0.8; z-index:2;");
    });
    setTimeout(()=>{
      router.push('/home');
    },2000);
    
  }
});
const check = (option: number) => {
  if (option == 1) {
    document.querySelectorAll(".rede").forEach(function (valor) {
      valor.setAttribute("style", "background-color:gray; color:white;");
 
    });
    o1 = true;
        confirme();
  } else if (option == 2) {
    document.querySelectorAll(".peixe").forEach(function (valor) {
 valor.setAttribute("style", "background-color:gray; color:white;");
    
    });
    o2 = true;
        confirme();
  } else if (option == 3) {
    document.querySelectorAll(".rio").forEach(function (valor) {
 valor.setAttribute("style", "background-color:gray; color:white;");
    
    });
    o3 = true;
        confirme();
  } else if (option == 4) {
    document.querySelectorAll(".canoa").forEach(function (valor) {
 valor.setAttribute("style", "background-color:gray; color:white;");
    
    });
    o4 = true;
    confirme();
  }
};
let o1 : Boolean = false;
let o2 : Boolean = false;
let o3 : Boolean = false;
let o4 : Boolean = false;

const verificaCombinacao = () => {
  if (
    letraAcendida[0][0] == true &&
    letraAcendida[0][1] == true &&
    letraAcendida[0][2] == true &&
    letraAcendida[0][3] == true  && o1 == false) {
    check(1); // casa
   
  } else if (
    letraAcendida[1][0] == true &&
    letraAcendida[1][1] == true &&
    letraAcendida[1][2] == true &&
    letraAcendida[1][3] == true && 
    letraAcendida[1][4] == true && o2 == false
  ) {
    check(2); //mala
   
  } else if (
    letraAcendida[2][0] == true &&
    letraAcendida[2][1] == true &&
    letraAcendida[2][2] == true  && o3 == false
  ) {
    check(3); //copo
   
  } else if (
    letraAcendida[3][0] == true &&
    letraAcendida[3][1] == true &&
    letraAcendida[3][2] == true &&
    letraAcendida[3][3] == true &&
    letraAcendida[3][4] == true && o4 == false
  ) {
   
    check(4); //bola
  }
};

const acenderLetra = (linhaIndex: number, celulaIndex: number) => {
  letraAcendida[linhaIndex][celulaIndex] = !letraAcendida[linhaIndex][celulaIndex];
  verificaCombinacao();
};
</script>

<template>
  <div class="content">
    <h1>Caça Palavras</h1>
    <div class="quadro">
      <div
        v-for="(linha, linhaIndex) in [
          props.quadro.line1,
          props.quadro.line2,
          props.quadro.line3,
          props.quadro.line4,
          props.quadro.line5,
          props.quadro.line6,
        ]"
        :key="linhaIndex"
        class="linha"
      >
        <div
          v-for="(letra, celulaIndex) in linha"
          :key="celulaIndex"
          class="celula"
          :class="{ 'letra-acendida': letraAcendida[linhaIndex][celulaIndex] }"
          @click="acenderLetra(linhaIndex, celulaIndex)"
        >
          {{ letra }}
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
  gap: 5px;
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

/* .letra:hover{
  background-color: yellow;

} */

.letra-acendida {
  background-color: yellow;
}
</style>
