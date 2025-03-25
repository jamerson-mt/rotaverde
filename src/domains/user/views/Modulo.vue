<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import HeaderLevels from '@/domains/portuguese/components/HeaderLevels.vue';
import NavBotton from '@/domains/portuguese/components/NavBotton.vue';
import CardLevels from '@/domains/user/components/CardLevels.vue';
import { ref } from 'vue'
import Buzina from "@/domains/auth/components/Buzina.vue"

const frase = ref('selecione o módulo'); 

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
            <Buzina frase="selecione o módulo Descobrindo palavras"/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <CardLevels 
                title="Descobrindo palavras"
                image="img/abc.png"
                link="/att/roadMap"
                atividade="letras"
                />
            </div>
        </ion-content>
        <NavBotton />
    </ion-page>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 30px;
    align-items: center;
}

.NavBotton {
    position: fixed;
    bottom: 0;
    width: 100%;
}

 
</style>