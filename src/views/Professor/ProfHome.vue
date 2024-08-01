<script setup lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { routeLocationKey, useRouter } from 'vue-router';
import NavBotton from '@/components/NavBotton.vue';
import CardIonic from '@/components/cards/CardIonic.vue';


</script>

<template>
    <div class="page">
    <ion-page>
        <ion-content>
            <div class="vetor">
                <img src="../../../public/img/fundo.png" alt="Capacita Digital">
            </div>
            <div class="livro">
                <img src="../../../public/img/study.png" alt="Capacita Digital">
            </div>
            <div class="content">
                <div class="title">
                    <h1>Módulos</h1>
                </div>
                <CardIonic
                    title="Matemática"
                    image="../../../public/img/raiz.png"
                    link=""     
                />
                <CardIonic
                    title="Usuarios"
                    image="../../../public/img/raiz.png"
                    link="/manager/users"     
                />
            </div>
        </ion-content>
        <div id="navButton">
            <NavBotton />
        </div>
    </ion-page>
</div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

* {
    --background: #00664F;
}

.vetor {
    position: relative;
    top: 2.1rem;
    right: -7.5rem;
    width: 70%;
    height: 30%;
    z-index: -1;
}

.livro {
    position: relative;
    top: -7rem;
    right: -10.8rem;
    width: 55%;
    height: 30%;
    z-index: 1;
}

.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 55%;
    background: #FFF;
    border-radius: 40px 0 0 0;
}

.navButton {
    position: absolute;
    bottom: 0;
}

.title {
   margin-left: 2rem;
   font-size: 12px;
}

.title h1 {
    font-weight: bold;
}

</style>