<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import Header from '@/components/header/Header.vue';
import { RouterLink } from 'vue-router';
import NavBotton from '@/components/NavBotton.vue';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <Header color="#e614d1" />
            </div>
            <div class="content">
                <h1 class="title">Escrita e pronúncia das <br> palavras</h1>
                <div id="level">
                    <p>05/30</p>
                </div>
                <RouterLink class="route" to="/att/port/escrita">Continuar</RouterLink>
            </div>
            <div class="NavBotton">
                <NavBotton />
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
    .NavBotton {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .content {
        background-image: url("../../../public/img/capas/capa3.jpeg"); 
        height: 18%;
        color: #000;
        border-radius: 20px;
        margin: 10px;
        border: solid #e614d1 1px;
    }

    .title {
        margin-left: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    #level {
        position: absolute;
        right: 1.5rem;
        top: 9rem;
        width: 4rem;
        background-color: aliceblue;
        border-radius: 15px;
        padding: 5px 2px;
        text-align: center;
        font-size: 11px;
        font-weight: bold;        
    }

    .route {
        text-decoration: none;
        color: #000;
        margin-left: 10px;
        font-size: 10px;
        background-color: aliceblue;
        padding: 10px;
        border-radius: 20px;
    }
</style>