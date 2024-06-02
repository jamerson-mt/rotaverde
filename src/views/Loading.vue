<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import Progress from '@/components/progressBar/Progress.vue';
import { speakText , speek } from '../../public/ts/fala';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/home?q=i');
  }, 5500);
});

speakText(speek[1].text);
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container" class="h-full flex flex-col justify-center items-center">
                <div id="image" class="w-8/12 my-8">
                    <img src="../../public/img/curuja.png" alt="Motagem01">
                </div>
                <div>
                    <Progress />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
