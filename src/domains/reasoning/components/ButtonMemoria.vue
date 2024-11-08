<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit']);
const selectedColor = ref();

function resposta(index: number) {
    selectedColor.value = index;
    emit('submit', index);
}

</script>

<template>
    <div id="content">
        <ion-button @click="resposta(0)" id="azul">Azul</ion-button>
        <ion-button @click="resposta(1)" id="vermelho">Vermelho</ion-button>
        <ion-button @click="resposta(2)" id="verde">Verde</ion-button>
        <ion-button @click="resposta(3)" id="laranja">Amarelo</ion-button>
    </div> 
</template>

<style scoped>
#content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

#azul {
    --background: #0000FF;
    color: white;
    width: 150px;
    height: 50px;
    margin: 10px;
    --border-radius: 20px;
}

#vermelho {
    --background: #FF0000;
    color: white;
    width: 150px;
    height: 50px;
    margin: 10px;
    --border-radius: 20px;
}

#verde {
    --background: #008000;
    color: white;
    width: 150px;
    height: 50px;
    margin: 10px;
    --border-radius: 20px;
}

#laranja {
    --background: #FFA500;
    color: white;
    width: 150px;
    height: 50px;
    margin: 10px;
    --border-radius: 20px;
}
</style>
