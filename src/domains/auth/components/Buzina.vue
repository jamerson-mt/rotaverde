<script setup lang="ts">

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
    <div class="buzina" @click="falar(frase)">
        <img src="img/buzina.png" alt="buzina">
    </div>
</template>

<style scoped>
.buzina {
    width: 15%;
    margin: auto;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
}
</style>
