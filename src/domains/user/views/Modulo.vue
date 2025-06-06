<script setup lang="ts">
import { IonPage } from '@ionic/vue';

import CardLevels from '@/domains/user/components/CardLevels.vue';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <FalarComponent ref="falarComponent" /> <!-- Adicionando a referência ao FalarComponent -->
            </div>
            <div class="container">
                <CardLevels 
               
                title="Descobrindo palavras"
                image="img/abc.png"
                link="/att/roadMap"
                atividade="letras"
                :isBlocked="false"
                />
            </div>
        </ion-content>
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