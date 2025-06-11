<script setup lang="ts">
import Options from "@/domains/reasoning/components/Options.vue";
import { speakText , speek } from '@/domains/portuguese/services/fala';
import Modal from "@/domains/technology/components/Modal.vue";
import { defineProps, ref } from 'vue';
import { defineEmits } from 'vue';
import audioManager from '@/utils/audioManager';

const fala = () => {
    // speakText('Selecione a palavra correspondente a imagem');
    audioManager.playAudio(`public/audio/palavracorreta.wav`);
}

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    }
});

const isModalOpen = ref(false);
const modalMessage = ref('');

const emit = defineEmits(['nextAtt']);

const nextAtt = ref();

function attNext () {
    let next = true
    emit('nextAtt', next);
}

function responseValue(value: boolean){
    if (value == true) {
        speakText('Parabéns, você acertou');
        modalMessage.value = 'Parabéns, você acertou ';
        isModalOpen.value = true;

        setTimeout(() => {
            closeModal();
            attNext(); 
        }, 3000);

    } else {
        speakText('Ops, vamos tentar novamente');
        modalMessage.value = 'Que pena, tente novamente';
        isModalOpen.value = true;

        setTimeout(() => {
            closeModal();
        }, 3000);
    }
}

function closeModal() {
    isModalOpen.value = false;
}


</script>

<template>
        <div class="flex flex-col items-center justify-center">
            <h1 id="title">{{ title }}</h1>
           <div class="div-fone"> <i class="fone"><img src="img/fala.png" alt="" @click="fala"></i></div>
            <img id="img" class="w-48" :src="image">
            <div class="w-full">
                <Options @submit="responseValue"
                    :options1="options.option1" 
                    :options2="options.option2" 
                    :options3="options.option3" 
                    :options4="options.option4" 
                    :response="options.response"
                />
            </div>

            <!-- <Modal :isOpen="isModalOpen" @close="closeModal" :modalMessage = "modalMessage" /> -->
        </div>
</template>

<style scoped>
#title {
    font-size: 1.5rem;
    margin: 1rem;
    text-align: center;
}

#img {
    border: solid 2px #b8ada4;
    border-radius: 10px;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
}

.fone{
    height: 50px;
    width: 50px;

}

.div-fone{
    display: flex;
    flex-direction: row;
    justify-content: end;
    text-align: center;
    padding-right: 10px;
    width: 100%;
}
</style>