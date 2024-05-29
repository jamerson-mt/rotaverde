<script setup lang="ts">
import Options from "@/components/Options.vue";
import { speakText , speek } from '../../public/ts/fala';
const fala = () => {
    speakText('qual a escrita correta da imagem abaixo?');
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

</script>

<template>
        <div class="flex flex-col items-center justify-center">
            <h1 id="title">{{ title }}</h1>
           <div class="div-fone"> <i class="fone"><img src="../../public/img/fala.png" alt="" @click="fala"></i></div>
            <img  class="w-48" :src="image">
            <div class="w-full">
                <Options 
                    :options1="options.option1" 
                    :options2="options.option2" 
                    :options3="options.option3" 
                    :options4="options.option4" 
                    :response="options.response"
                />
            </div>
        </div>
</template>

<style scoped>
#title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
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