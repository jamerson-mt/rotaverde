<script setup lang="ts">
import { defineProps } from 'vue';
import FalarComponent from '@/components/FalarComponent.vue';

defineProps({
    title: { 
        type: String,
        required: true
    },
    descripition: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    atividade: {
        type: String,
        required: true
    },
    competencia: {
        type: String,
        required: false,
    },
    competencia2: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    },
    isBlocked: {
        type: Boolean,
        required: true
    }
});

</script>

<template>
    <div class="card" :class="{ blocked: isBlocked }">
        <div v-if="isBlocked" class="overlay">
            <p class="blocked-text">Bloqueado</p>
        </div>
      
        <div v-else class="card" @click="$refs.falarComponent.falar('card1','modulo1pt', 'suasatividades', link)">
            <div class="content">
                <p class="title">{{ title }}</p>
                <p class="descripition">{{ descripition }}</p>
                <div class="competencias">
                    <p v-if="competencia" class="competencia">{{ competencia }}</p>
                    <p v-if="competencia2" class="competencia">{{ competencia2 }}</p>
                </div>
            </div>
            <div class="img">
                <p>{{ time }}</p>
                <img :alt="title" :src="image" />
            </div>
        </div>
        <FalarComponent ref="falarComponent" />
        
    </div>
   
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");


.card {
    margin-top: 0rem;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 90%;
    height: 170px;
    background-color: #249B9B;
    border-radius: 10px;
    align-items: center;
    margin-bottom: auto;
}

.card.blocked {
    position: relative;
    background-color: #249B9B; /* Mantém a cor original */
    opacity: 1; /* Exibe normalmente */
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Sobreposição translúcida */
    border-radius: 10px;
    z-index: 1;
}

.blocked-text {
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: white;
    text-align: center;
    z-index: 2;
}

.content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.title {
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
}

.descripition {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
}

.competencias {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0px;
}

.competencia {
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-style: medium;
    font-size: 15px;
    color: #0F3D3E;
    background-color: #ECC055;
    text-align: center;
    border-radius: 5px;
    padding: 5px 5px;
    white-space: nowrap;
}

p {
    margin-left: 20px;
    margin-bottom: 5px;
}

.link {
    position: relative;
    color: rgb(3, 15, 74);
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    background-color: white;
    padding: 4px 8px;
    border-radius: 39px;
}

.img {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 4rem;
    height: 4rem;
}

.img img {
    margin-top: 0.2rem;
}

.img p {
    position: relative;
    top: -8%;
    width: 100%;
    font-family: "DM Sans", sans-serif;
    border-radius: 10px;
    font-weight: 500;
    font-style: medium;
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
    padding: 5px;
    background-color: #FFFFFF33;
}
</style>