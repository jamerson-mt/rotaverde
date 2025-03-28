<script setup lang="ts">

import { onMounted } from 'vue';
import { defineProps, toRefs } from 'vue';
import { falar } from '@/utils/utils';
const props = defineProps<{
    frase: string;
    
}>();

// Função para reproduzir o áudio com base no nome do arquivo


// Se precisar fazer algo com a prop, pode acessar diretamente em props
const { frase } = props;
</script>

<template>
    <div class="header">
        <div class="img">
            <img src="img/iconperson.png" alt="person">
        </div>
        <div class="content">
            <h1>Meio Ambiente</h1>
            <div id="bar1"></div>
            <div id="bar2"></div>
        </div>
        <div class="prata">
            <img src="img/prata.png" alt="prata">
        </div>
        <div class="buzina" @click="falar(frase)">
            <img src="img/buzina.png" alt="buzina">
        </div>
    </div>
</template>

<style scoped>
.header {
    position: relative;
    top: 0;
    display: flex;
    background-color: #249B9B;
    color: #fff;
    padding: 10px;
    border-radius: 0 0 0px 0px;
    padding: 20px;
    height: 125px;
    align-items: center;
}

.img {
    display: inline-block;
    justify-content: center;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #D9D9D9;
    width: 4rem;
    height: 4rem;
    align-items: center;
}

.content {
    display: inline-block;
    margin-left: 10px;
    text-align: left;
    width: 45%;
}

h1 {
    font-size: 24px;
}

#bar1 {
    display: flex;
    margin-top: -4px;
    width: 7rem;
    height: 7px;
    background-color: #dbdbdb;
    border-radius: 20px;
}

#bar2 {
    position: relative;
    top: -7px;
    width: 2rem;
    height: 7px;
    background-color: #65D430;
    border-radius: 20px;
}

#p {
    font-size: 13px;
    margin-top: -2px;
    color: #222323;
    font-weight: bold;
}

.prata {
    width: 11%;
    margin: auto;
}

.buzina {
    width: 11%;
    margin: auto;
}
</style>