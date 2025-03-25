<script setup lang="ts">
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import Buzina from '@/domains/auth/components/Buzina.vue';
import { ref } from 'vue'

const frase = ref('seja bem vindo ao Róta Verde, este é o caminho certo para a sustentabilidade');
const router = useRouter();
// Função para reproduzir o áudio com base no nome do arquivo
const falar = (frase: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(frase);
    utterance.lang = 'pt-BR'; // Define o idioma para português do Brasil
    synth.speak(utterance);
};
function route(frase: string) {
   
    router.push('/home');
};

</script>

<template>
    <ion-page>
        <ion-content class="content">
            <Buzina :frase="frase" />
            <div class="img">
                <img src="/public/img/rotaverde.jpg" alt="Capacita Digital" />
            </div>
            <div class="back"></div>
            <div class="title">
                <h1>Rota Verde</h1>
                <p>Ensinado Sustentabilidade,<br> de forma sustentável</p>
            </div>
            <IonButton class="route" @click="route">Vamos lá</IonButton>
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
    top: 58%;
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
    bottom: 22%;
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