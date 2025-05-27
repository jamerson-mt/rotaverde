<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/domains/reasoning/components/Header.vue';
import CardLevels from '../components/CardLevels.vue';
import Exercise from '@/domains/portuguese/components/Exercise.vue';
import { falar } from '@/utils/falar';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <Header />
            </div>
            <RouterLink to="/home" class="title">
                <img src="/public/img/IconsHome/voltar.png">
                <p>Educação Ambiental</p>
            </RouterLink>
            <div class="content">
                <CardLevels 
                    title="Letrinhas da Natureza"
                    descripition="Aprenda as letras com palavras sobre a natureza"
                    competencia="EF01LP02"
                    image="img/icons/letras.png"
                    link="/att/roadMap"
                    atividade="Português"
                    time="10 min"
                />
                 <CardLevels 
                    title="Letrinhas da Natureza"
                    descripition="Aprenda as letras com palavras sobre a natureza"
                    competencia="EF01LP02"
                    image="img/icons/letras.png"
                    link="/att/roadMap"
                    atividade="Português"
                    time="5 min"
                />
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>

.title {
    margin-top: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
}

.title p {
    font-size: 1.5rem;
    color: #1E1E1E;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem; 
}

</style>