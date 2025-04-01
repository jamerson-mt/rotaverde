<script setup lang="ts">
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { falar } from '@/utils/falar';
import Buzina from '@/domains/auth/components/Buzina.vue'
const frase = ref('ola');
const router = useRouter();



function route(frase: string) {
    falar(frase);
    router.push('/person');
};

</script>

<template>
    <ion-page>
        <ion-content>
            <div class="img">
                <img src="img/capas/BG.png" alt="Capacita Digital" />
            </div>
            <div class="back"></div>
            <div>
                <img class="logo" src="img/components/logo.svg" alt="Capacita Digital" />
            </div>
            <div class="title">
                <h1>Capacita Digital</h1>
                <p>Criando pontes para o ensino e superando <br> as barreiras do saber</p>
            </div>
            <IonButton class="route"  >Vamos lá</IonButton>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #000;
    color: white;
}

.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.logo {
    position: absolute;
    top: 33%;
    left: 21%;
    width: 14rem;
}

.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
    z-index: -1;
}

.title {
    position: absolute;
    width: 90%;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.title h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

.title p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    justify-content: center;
    color: #d4d1d1;
}

.route {
    position: absolute;
    bottom: 24%;
    --background: blueviolet;
    color: azure;
    width: 100%;
    height: 4.3rem;
    margin: 0 auto;
    font-weight: bold;
    border-radius: 5px;
    padding: 10px 20px;
    text-align: center;
}
</style>