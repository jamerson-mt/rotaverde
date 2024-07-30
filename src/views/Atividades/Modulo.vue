<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import HeaderLevels from '@/components/header/HeaderLevels.vue';
import NavBotton from '@/components/NavBotton.vue';
import CardLevels from '@/components/cards/CardLevels.vue';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <HeaderLevels />
            </div>
            <div class="container">
                <CardLevels 
                title="Conhecendo as letras"
                image="../../../public/img/abc.png"
                link="/att/roadMap"
                atividade="letras"
                />
                
                <CardLevels
                title="Sílabas e junções"
                image="../../../public/img/alfabeto.png"
                link="/att/roadMap"
                atividade="silabas"
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