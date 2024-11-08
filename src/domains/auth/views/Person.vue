<script setup lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { signInWithRedirect, getRedirectResult, onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue'
import Buzina from '@/domains/auth/components/Buzina.vue'

const frase = ref('escolha um usuario para testar');

const falar = (frase: string) => {
    const audio = new Audio(`/audio/${frase}.mp3`);
    audio.play().catch(error => {
        console.error('Erro ao reproduzir o áudio:', error);
    });
};

</script>

<template>
    <ion-page>
        <ion-content>
        <Buzina :frase="frase" />
            <div class="img">
                <img src="img/capas/estudo.jpeg" alt="Capacita Digital">
            </div>
            <div class="back"></div>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="title">
                            <h1>Bem vindo!</h1>
                            <p>Esolha qual o seu tipo de usuário</p>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row class="buttons">
                    <div class="submit">
                        <RouterLink class="route" to="/manager/categories">Professor</RouterLink>
                    </div>
                    <div class="login">
                        <RouterLink @click="falar(frase)" class="route" to="/home">Aluno</RouterLink>
                    </div>
                </ion-row>
                <ion-row>
                    <div class="input"></div>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
    z-index: -1;
}

.title {
    display: flex;
    position: relative;
    top: 20.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.title h1 {
    font-size: 2rem;
    font-weight: 700;
}

.title p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #d4d1d1;
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.submit {
    display: flex;
    position: relative;
    width: 95%;
    height: 3.5rem;
    top: 22rem;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: blueviolet;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
}

.submit .route,
.login .route {
    color: azure;
    font-weight: bold;
}

.google {
    display: flex;
    position: relative;
    width: 95%;
    height: 3.5rem;
    top: 23rem;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #1E1F24;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
}

.google img {
    position: absolute;
    left: 20px;
    width: 25px;
    height: 25px;
}

.login {
    display: flex;
    position: relative;
    width: 95%;
    height: 3.5rem;
    top: 24rem;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
    border: solid 2px #1E1F24;
}
</style>