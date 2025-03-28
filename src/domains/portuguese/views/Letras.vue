<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { ref, watch, onMounted } from 'vue';
import { exercise } from "../services/attLetras.ts";
import AttEscrita from "@/domains/portuguese/components/AttLetras.vue";
import HeaderLevels from '../components/HeaderLevels.vue';
import { speakText } from '../services/fala.js';
import { useRouter } from 'vue-router';

const emit = defineEmits<{
  (e: 'nextAtt', payload: boolean): void; 
}>();

const frase = ref('null');
const router = useRouter();
const fala = () => {
    speakText('Descubra as iniciais das imagens?');
}

setTimeout(() => {
    speakText('qual a inicial correta da imagem abaixo?');
}, 1000);

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

function attNext() {
    let next = true;
    emit('nextAtt', next);
}

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <HeaderLevels :frase="frase" />
            </div>
            <div id="options">
                <AttEscrita 
                    :image="att.image"
                    :title="att.title"
                    :options="att.options"
                />
                <div id="button">
                    <button @click="nextAtt()" id="router" class="text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center mt-10">Próximo</button>
                </div>
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
