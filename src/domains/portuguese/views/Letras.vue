<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { ref, watch, onMounted } from 'vue';
import { exercise } from "../services/attLetras.ts";
import AttEscrita from "@/domains/portuguese/components/AttLetras.vue";
import HeaderLevels from '../components/HeaderLevels.vue';
import Header from '@/domains/reasoning/components/Header.vue';
import { speakText } from '../services/fala.js';
import { useRouter } from 'vue-router';
import { defineEmits } from 'vue';
import { falar } from '@/utils/falar';
import NivelModal from '../components/NivelModal.vue';

const emit = defineEmits<{
  (e: 'nextAtt' | 'closeModal', payload: boolean): void; 
}>();

const frase = ref('Descubra a inicial correta da imagem abaixo');
const router = useRouter();
const fala = () => {
    speakText('Descubra as iniciais das imagens?');
}

setTimeout(() => {
    falar('attLetras', '', '#')
}, 1000);

let itemArray = ref(0);
let att = ref<any>(null);

watch(itemArray, (newValue) => {
    att.value = exercise[newValue];
});

onMounted(() => {
    console.log(att.value);
});

const attEscritaRef = ref<InstanceType<typeof AttEscrita> | null>(null);

function nextAtt() {
    itemArray.value++;
    if (itemArray.value >= atividadesFiltradas.value.length) {
        itemArray.value = 0;
        router.push('/att/roadMap');
    } else {
        att.value = atividadesFiltradas.value[itemArray.value];
    }
}

function attNext() {
    let next = true;
    emit('nextAtt', next);
}

const showNivelModal = ref(true);
const nivelSelecionado = ref<number | null>(null);
const atividadesFiltradas = ref<typeof exercise>([]);

function resetNivelModal() {
    showNivelModal.value = false;
    setTimeout(() => {
        showNivelModal.value = true;
        atividadesFiltradas.value = [];
        att.value = null;
        itemArray.value = 0;
    }, 300);
}

function handleNivelSelecionado(nivel: number) {
    nivelSelecionado.value = nivel;
    atividadesFiltradas.value = exercise.filter(e => e.level === nivel);
    itemArray.value = 0;
    att.value = atividadesFiltradas.value[0] || null;
    showNivelModal.value = false;
}

onMounted(() => {
    resetNivelModal();
});

import { onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate((to, from, next) => {
    resetNivelModal();
    next();
});
</script>

<template>
    <ion-page>
        <NivelModal :isOpen="showNivelModal" @nivelSelecionado="handleNivelSelecionado" @close="showNivelModal = false" />
        <ion-content :fullscreen="true">
            <div>
                <Header />
            </div>
            <div id="options">
                <AttEscrita
                    ref="attEscritaRef"
                    v-if="att"
                    :image="att.image"
                    :title="att.title"
                    :options="att.options"
                    @nextAtt="nextAtt"
                />
                <div v-else class="text-center text-lg mt-10">Nenhuma atividade disponível para este nível.</div>
            </div>
        </ion-content>
        <div class="bottom-0">
             
        </div>
    </ion-page>
</template>

<style scoped>
#button {
    display: flex;
    justify-content: center;
}

#router {
    background-color: #6D4D2F;
    font-size: 1.5rem;
}
</style>
