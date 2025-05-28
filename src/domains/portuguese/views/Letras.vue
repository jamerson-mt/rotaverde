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
    // speakText('qual a inicial correta da imagem abaixo?');
}, 1000);

let itemArray = ref(0);
let att = ref(exercise[itemArray.value]);

watch(itemArray, (newValue) => {
    att.value = exercise[newValue];
});

onMounted(() => {
    console.log(att.value);
});

const attEscritaRef = ref<InstanceType<typeof AttEscrita> | null>(null);

function nextAtt() {
    console.log("Fechando modal...");
    attEscritaRef.value?.closeModal(); 
    
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
                <Header />
            </div>
            <div id="options">
                <AttEscrita
                    ref="attEscritaRef"
                    :image="att.image"
                    :title="att.title"
                    :options="att.options"
                    @nextAtt="nextAtt"
                />
                <!-- <div id="button">
                    <button @click="nextAtt()" id="router" class="text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center mt-10">Próximo</button>
                </div> -->
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
