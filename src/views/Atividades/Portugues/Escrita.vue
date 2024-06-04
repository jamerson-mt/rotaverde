<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { ref, watch } from 'vue';
import { onMounted } from 'vue';
import { exercise } from "../../../../public/ts/attEscrita.ts";
import NavBotton from '@/components/NavBotton.vue';
import Header from '@/components/header/Header.vue';
import AttEscrita from "@/components/AttEscrita.vue";
import { speakText , speek } from '../../../../public/ts/fala';
import { useRouter } from 'vue-router';

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
            <Header 
                color="#6D4D2F"
            />
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
