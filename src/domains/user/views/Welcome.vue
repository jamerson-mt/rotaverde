<script setup>
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import { nextPage } from '@/utils/nextPage'; // Corrigida a importação
</script>

<template>
    <ion-page>
        <ion-content class="content">
            <div class="img">
                <img src="/public/img/fundoarvore.jpg" alt="Rota Verde" />
            </div>
            <div class="back"></div>
            <div class="title">
                <h1>Rota Verde</h1>
                <p>Ensinado Sustentabilidade,<br> de forma sustentável</p>
                <IonButton class="route" @click="falar('essaesuaarea', 'essaesuaarea','/home')">Vamos lá</IonButton>
            </div>

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
    background-color: black;
    color: white;
    overflow: hidden;
}

.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.back {
    overflow-y: hidden;
    position: absolute;
    bottom: 0px;
    left: 0;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 60%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(24, 24, 24, 0.5), rgb(15, 15, 15), rgb(15, 15, 15));
    z-index: -1;
}

.title {
    position: absolute;
    width: 90%;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    overflow: hidden;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.title h1 {
    font-size: 3rem;
    font-weight: 800;
}

.title p {
    font-size: 1.3rem;
    font-weight: 300;
    font-style: normal;
    text-align: center;
    justify-content: center;
    color: #d4d1d1;
}

.route {
    position: relative;
    --background: rgb(16, 190, 45);
    color: azure;
    width: 90%;
    height: 4.3rem;
    margin: 0 auto;
    font-weight: bold;
    border-radius: 5px;
    padding: 10px 20px;
    text-align: center;
}
</style>