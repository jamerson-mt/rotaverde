<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <div id="content">
        <ion-button id="azul">Azul</ion-button>
        <ion-button id="vermelho">Vermelho</ion-button>
        <ion-button id="verde">Verde</ion-button>
        <ion-button id="laranja">Laranja</ion-button>
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
    width: 100px;
    height: 50px;
    margin: 10px;
}

#vermelho {
    --background: #FF0000;
    color: white;
    width: 100px;
    height: 50px;
    margin: 10px;
}

#verde {
    --background: #008000;
    color: white;
    width: 100px;
    height: 50px;
    margin: 10px;
}

#laranja {
    --background: #FFA500;
    color: white;
    width: 100px;
    height: 50px;
    margin: 10px;
}
</style>