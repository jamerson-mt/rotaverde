<script setup lang="ts">
import { IonContent, IonHeader, IonPage } from '@ionic/vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <ion-page>
            <ion-content :fullscreen="true">
            <ion-header collapse="condense">
            </ion-header>
            <div class="w-6/12 mt-3.5">
                <img src="../../public/img/mont1.png" alt="Motagem01">
            </div>
            <div id="container" class="items-center ml-9">
                <div>
                    <h1 class="text-5xl leading-11">Capacita</h1>
                    <h1 class="text-5xl">Digital</h1>
                </div>
                <div>
                    <p class="text-lg mt-5">Criando pontes para o ensino e <br> superando as barreiras do saber</p>
                </div>                
            </div>
            <div class="my-1.5 flex justify-center mt-5 h-24">
                <Button  
                    link="/loading"
                />
            </div>
            <div id="img"  class="w-5/12 mt-3.5 absolute right-0">
                <img src="../../public/img/mont2.png" alt="Motagem01">
            </div>
            <div id="img"  class="w-3/12 absolute bottom-4 left-0">
                <img src="../../public/img/pec1.png" alt="Motagem01">
            </div>
        </ion-content>
    </ion-page>
</template>

