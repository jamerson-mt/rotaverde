<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import { novaSequencia } from "../services/GameMemoria.js";
import Header from '../components/Header.vue';
import AttHeader from '../components/AttHeader.vue';
import GameCircle from '../components/GameCircle.vue';
import ButtonMemoria from '../components/ButtonMemoria.vue';
import NavBotton from '../../portuguese/components/NavBotton.vue';

let sequenciaUsuario = ref<number[]>([]);
let roundAtual = ref(0);

function verificarResposta(index: number) {
    if (roundAtual.value >= novaSequencia.length) {
        console.log("Você já completou todas as sequências.");
        return;
    }
    
    sequenciaUsuario.value.push(index);
    
    if (sequenciaUsuario.value.length === novaSequencia[roundAtual.value].resposta.length) {
        const respostaCorreta = sequenciaUsuario.value.every((resposta, i) => resposta === novaSequencia[roundAtual.value].resposta[i].index);
        
        if (respostaCorreta) {
            console.log("Sequência correta");
            roundAtual.value++;
            sequenciaUsuario.value = [];
        } else {
            console.log("Sequência incorreta");
            console.log("Sequência é:");
            console.log(novaSequencia[roundAtual.value].resposta.map(resposta => resposta.index));
            roundAtual.value = 0;
            sequenciaUsuario.value = [];
        }
    }
}

function sequenciaCores() {
    if (roundAtual.value < novaSequencia.length) {
        return novaSequencia[roundAtual.value].resposta.map(resposta => resposta.index);
    } else {
        return [];
    }
}


</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <Header color="#249B9B" />
            </div>
            <div>
                <AttHeader />
            </div>
            <div id="content">
                <GameCircle :cores="sequenciaCores()" />
            </div>
            <div>
                <ButtonMemoria @submit="verificarResposta" />
            </div>
        </ion-content>
        <div class="bottom-0">
             
        </div>
    </ion-page>
</template>

<style scoped>
#content {
    width: 100%;
    height: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.stats {
    text-align: center;
    margin-top: 20px;
}
</style>