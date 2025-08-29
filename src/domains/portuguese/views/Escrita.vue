<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { exercise } from "../services/attEscrita";
import TitleCategories from '@/domains/user/components/TitleCategories.vue';
import AttEscrita from "@/domains/portuguese/components/AttEscrita.vue";
import NivelModal from '../components/NivelModal.vue';
import { speakText } from '../services/fala.js';
import { useRouter } from 'vue-router';
import HeaderLevels from '../components/HeaderLevels.vue';

// Definindo emit
const emit = defineEmits<{
    (e: 'nextAtt', payload: boolean): void; 
}>();

const frase = ref('null');
const router = useRouter();
const route = useRoute();

const showNivelModal = ref(true);
const nivelSelecionado = ref<number | null>(null);
const atividadesFiltradas = ref<typeof exercise>([]);
let itemArray = ref(0);
let att = ref<any>(null);


function resetNivelModal() {
    console.log('resetNivelModal chamado');
    showNivelModal.value = false;
    setTimeout(() => {
        showNivelModal.value = true;
        atividadesFiltradas.value = [];
        att.value = null;
    }, 300);
}

function handleNivelSelecionado(nivel: number) {
    nivelSelecionado.value = nivel;
    atividadesFiltradas.value = exercise.filter(e => e.level === nivel);
    itemArray.value = 0;
    att.value = atividadesFiltradas.value[0] || null;
    showNivelModal.value = false;
}

function nextAtt() {
    itemArray.value++;
    if (itemArray.value >= atividadesFiltradas.value.length) {
        itemArray.value = 0;
        router.push('/home');
    } else {
        att.value = atividadesFiltradas.value[itemArray.value];
    }
}


onMounted(() => {
    resetNivelModal();
});

onBeforeRouteUpdate((to, from, next) => {
    resetNivelModal();
    next();
});

// Receber next através do emit()
function attNext() {
    let next = true;
    emit('nextAtt', next);
}

</script>

<template>
    <ion-page>
        <NivelModal :isOpen="showNivelModal" @nivelSelecionado="handleNivelSelecionado" @close="showNivelModal = false" />
        <ion-content :fullscreen="true">
            <div class="header">
                <img src="/public/img/IconsHome/relogio.png">
                <TitleCategories class="title"
                    title="Atividade"
                    route="/att/roadMap"    
                />
            </div>
            <div id="options">
                <AttEscrita v-if="att" :title="att.title" :image="att.image" :options="att.options" />
                <div id="button" v-if="att">
                    <button @click="nextAtt()" id="router"
                        class="text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center mt-10">Próximo</button>
                </div>
                <div v-else class="text-center text-lg mt-10">Nenhuma atividade disponível para este nível.</div>
            </div>
        </ion-content>
        <div class="bottom-0">
        </div>
    </ion-page>
</template>

<style scoped>

.header img {
    width: 4rem;
    height: 4rem;
    position: absolute;
    right: 10px;
    top: 10px;
}

.title {
    margin: 3rem auto 1rem auto;
}

::v-deep(.title p) {
  font-size: 2rem;
  margin-left: 5px;
}

#button {
    display: flex;
    justify-content: center;
}

#router {
    background-color: #6D4D2F;
    font-size: 1.5rem;
}
</style>
