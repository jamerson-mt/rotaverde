<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { ref, watch } from 'vue';
import { onMounted } from 'vue';
import { exercise } from "../services/attEscrita.js";
import NavBotton from '@/domains/portuguese/components/NavBotton.vue';
 
import AttEscrita from "@/domains/portuguese/components/AttEscrita.vue";
import { speakText , speek } from '../services/fala.js';
import { useRouter } from 'vue-router';
import Buzina from '@/domains/auth/components/Buzina.vue'

const frase = ref('null');
const router = useRouter();
const fala = () => {
    speakText('qual a escrita correta da imagem abaixo?');
}
speakText('Nesta atividade você terá que descobrir qual a escrita e pronúncia correta de algumas imagens');
setTimeout(()=>{
    speakText('qual a escrita correta da imagem abaixo?');
},1000)
let itemArray = ref(0);

let att = ref(exercise[itemArray.value]);

watch(itemArray, (newValue) => {
    att.value = exercise[newValue];
});

onMounted(() => {
    console.log(att.value);
});

function nextAtt () {
    itemArray.value++;
    if (itemArray.value >= exercise.length) {
        itemArray.value = 0;
        router.push('/home');
    } 
} 

// receber next através do emit()
// function attNext () {
//     let next = true
//     emit('nextAtt', next);
// }

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
        <div>
            <Buzina :frase="frase"/>
        </div>
        <div id="options">
            <AttEscrita 
                :title="att.title"
                :image="att.image"
                :options="att.options"
            />
            <div id="button">
                <button @click="nextAtt()" id="router" class="text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center mt-10">Próximo</button>
            </div>
        </div>
        </ion-content>
        <div class="bottom-0">
            <NavBotton />
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
