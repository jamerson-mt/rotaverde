<script setup lang="ts">
import Options from "@/domains/reasoning/components/OptionsLetras.vue";
import { speakText , speek } from '@/domains/portuguese/services/fala';
import Modal from "@/domains/technology/components/Modal.vue";
import { defineProps, ref } from 'vue';
import { defineEmits } from 'vue';
import { defineExpose } from 'vue';
import { watch } from 'vue';


const props = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    },
    closeModalProps: {
        type: Boolean,
    }
});

const fala = () => { speakText(props.title); }
const isModalOpen = ref(false);
const modalMessage = ref('');
const attIsCorrect = ref(false);

const emit = defineEmits(['nextAtt']);

const nextAtt = ref();

function attNext () {
    let next = true
    console.log('nextAtt =' + next);
    emit('nextAtt', next);
}


function responseValue(value: boolean) {
    if (value) {
        speakText('Parabéns, quer seguir para a próxima atividade?');
        modalMessage.value = 'Seguir para a próxima atividade?';
        attIsCorrect.value = true;
        isModalOpen.value = true;
        
        setTimeout(() => {
            closeModal();
            attNext();
        }, 15000);
        
    } else {
        speakText('Você errou. Quer tentar novamente?');
        modalMessage.value = 'Vamos novamente?';
        isModalOpen.value = true;

        setTimeout(() => {
            closeModal();
        }, 15000);
    }
}


function closeModal() {
    isModalOpen.value = false;
}

defineExpose({
    isModalOpen,
    closeModal
});

watch(() => props.closeModalProps, (newValue) => {
    if (newValue) {
        closeModal();
    }
});
</script>

<template>
    <header>
        <h1 id="title">Descubra a letra inicial da imagem</h1>
    </header>
        <div class="flex flex-col items-center justify-center">
           <div class="div-fone"> <i class="fone"><img src="img/fala.png" alt="" @click="fala"></i></div>
            <img id="img" class="w-48" :src="image">
            <div class="w-full">
                <Options @submit="responseValue"
                    :options1="options.option1" 
                    :options2="options.option2" 
                    :options3="options.option3" 
                    :response="options.response"
                />
            </div>

            <Modal 
                :isOpen="isModalOpen" 
                @close="closeModal" 
                :modalMessage="modalMessage" 
                @nextAtt="attNext" 
                :correct="attIsCorrect"
            />
        </div>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
}

#img {
    margin-top: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    width: 100%;
    max-width: 270px;
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