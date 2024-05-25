<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import Progress from '@/components/Progress.vue';
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container" class="h-full flex flex-col justify-center items-center">
                <div class="w-8/12 my-8">
                    <img src="../../public/img/curuja.png" alt="Motagem01">
                </div>
                <div>
                    <Progress />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>