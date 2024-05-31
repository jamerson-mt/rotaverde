<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, watch, computed } from 'vue';
import Header from '@/components/Header.vue';
import NavBotton from '@/components/NavBotton.vue';
import AttHeader from  "@/components/AttHeader.vue";
import ButtonMemoria from "@/components/ButtonMemoria.vue";
import GameCircle from "@/components/GameCircle.vue";
import { GameMemoria } from "../../../../public/ts/Raciocinio/GameMemoria.ts";

const gameInstance = new GameMemoria();
const sequenciaAtual = ref<Resposta[]>([]);

const rodada = computed(() => gameInstance.rodada);
const pontos = computed(() => gameInstance.pontos);

watch(rodada, (newValue) => {
    const seq = gameInstance.sequencia[newValue - 1];
    if (seq) {
        sequenciaAtual.value = seq.resposta;
    }
});
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <Header color="#fff202" />
            </div>
            <div>
                <AttHeader />
            </div>
            <div id="content">
                <GameCircle :sequencia="sequenciaAtual" />
            </div>
            <div>
                <ButtonMemoria @submit="verificarResposta" />
            </div>
        </ion-content>
        <div class="bottom-0">
            <NavBotton />
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
