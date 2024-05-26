<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import NavBotton from '@/components/NavBotton.vue';
import Header from '@/components/Header.vue';
import AttEscrita from "@/components/AttEscrita.vue";
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
        <div>
            <Header 
                color="#6D4D2F"
            />
        </div>
        <div>
            <AttEscrita 
                title="Qual a escrita correta para a imagem abaixo?" 
                content="Escreva um texto sobre o que você mais gosta de fazer nas férias." 
                image="../../../../public/img/girafa.png"
                link="/home"
            />
        </div>
        </ion-content>
        <div class="bottom-0">
            <NavBotton />
        </div>
    </ion-page>
</template>