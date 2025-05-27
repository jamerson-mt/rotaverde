<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, watch, onMounted } from 'vue';
import { exercise } from "../services/attEscrita.js";
import TitleCategories from '@/domains/user/components/TitleCategories.vue';
import AttEscrita from "@/domains/portuguese/components/AttEscrita.vue";
import { speakText } from '../services/fala.js';
import { useRouter } from 'vue-router';
import HeaderLevels from '../components/HeaderLevels.vue';

// Definindo emit
const emit = defineEmits<{
    (e: 'nextAtt', payload: boolean): void; // Definindo o evento e o tipo do payload
}>();

const frase = ref('null');
const router = useRouter();

let itemArray = ref(0);
let att = ref(exercise[itemArray.value]);

watch(itemArray, (newValue) => {
    att.value = exercise[newValue];
});

onMounted(() => {
    console.log(att.value);
});

function nextAtt() {
    itemArray.value++;
    if (itemArray.value >= exercise.length) {
        itemArray.value = 0;
        router.push('/home');
    }
}

// Receber next através do emit()
function attNext() {
    let next = true;
    emit('nextAtt', next);
}

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="header">
                <img src="/public/img/IconsHome/relogio.png">
                <TitleCategories class="title"
                    title="Atividade"
                    route="/att/roadMap"    
                />
            </div>
            <div id="options">
                <AttEscrita :title="att.title" :image="att.image" :options="att.options" />
                <div id="button">
                    <button @click="nextAtt()" id="router"
                        class="text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center mt-10">Próximo</button>
                </div>
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
