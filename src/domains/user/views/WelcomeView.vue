<script setup>
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import FalarComponent from '@/components/specific/FalarComponent.vue';
import { inject, ref, onMounted } from "vue";
import { speakText } from '@/utils/textToSpeech';
import { getUserData } from '@/utils/localStorageUtils';

const isPlaying = inject("isPlaying");
const loginClickCount = ref(0);
const isLoggedIn = ref(!!getUserData()); // Verifica se há dados do usuário no localStorage

onMounted(() => {
    if (isLoggedIn.value) {
        window.location.href = '/home';
    }
});

function handleLoginClick() {
    if (isLoggedIn.value) {
        window.location.href = '/home';
        return;
    }

    loginClickCount.value++;
    if (loginClickCount.value === 1) {
        speechSynthesis.cancel(); // Garante que nenhuma fala anterior esteja em andamento
        speakText('Você será redirecionado para a página de autenticação', { rate: 1.1, pitch: 1.2, volume: 0.9 });
    } else if (loginClickCount.value === 2) {
        speechSynthesis.cancel(); // Interrompe a fala em andamento
        window.location.href = '/login';
    }
}
</script>

<template>
    <ion-page class="welcome">
        <ion-content class="content">
            <div class="img">
                <img src="/public/img/capas/itapissuma.png" alt="Rota Verde" />
            </div>
            <div class="back"></div>
            <div class="title">
                <h1>Rota Verde</h1>
                <p>Ensinado Sustentabilidade,<br> de forma sustentável</p>
                <IonButton class="route" @click="$refs.falarComponent.falar('welcome','boasvindas', 'essaesuaarea', '/home')">Acessar sem login</IonButton>
                <IonButton class="route login" @click="handleLoginClick">Acessar com login</IonButton>
            </div>
            <div class="icons">
                <img src="/public/img/iconesSustentabilidade/reciclagem.png" />
                <img src="/public/img/iconesSustentabilidade/planta.png" />
                <img src="/public/img/iconesSustentabilidade/agua.png" />
            </div>
            <div class="user">
                <FalarComponent ref="falarComponent" audio1="" audio2="" rota="#" />
            </div>
            <div class="fala" v-if="isPlaying">
                <!-- Removido o componente TextToFala -->
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.fala {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.user {
    position: absolute;
    top: 25px;
    left: 12px;
    width: 2.9rem;
    cursor: pointer;
}

.user img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    --background: #0F3D3E;
    color: white;
    overflow: hidden;
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
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(24, 24, 24, 0.5), rgb(15, 15, 15, 0.7), rgb(15, 15, 15)); */
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
    --background: #137E60;
    color: azure;
    width: 100%;
    height: 4.3rem;
    margin: 0 auto;
    font-weight: bold;
    --border-radius: 3px;
    padding: 10px 20px;
    text-align: center;
}

.route.login {
    margin-top: 10px;
    --background: #0A6EBD;
}

.icons {
    position: relative;
    top: 38%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
}

.icons img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}

.audio-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.audio-overlay img {
    width: 100px;
    height: 100px;
}

.cancel-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>