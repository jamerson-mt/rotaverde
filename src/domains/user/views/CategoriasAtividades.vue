<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/domains/reasoning/components/Header.vue';
import CardLevels from '../components/CardLevels.vue';
import TitleCategories from '../components/TitleCategories.vue';
import { falar } from '@/utils/falar';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <Header />
            </div>
            <TitleCategories
                title="Português"
                route="/home"    
            />
            <div class="content">
                <CardLevels 
                    @click="falar('novos/roadMap', '', '#')"
                    title="Letrinhas da Natureza"
                    descripition="Aprenda as letras com palavras sobre a natureza"
                    competencia="EF01LP01"
                    competencia2="EF01LP02"
                    image="img/icons/letras.png"
                    link="/att/roadMap"
                    atividade="Português"
                    time="10 min"
                    :isBlocked="false"/>

                 <CardLevels 
                    title="Sílabas Sustentáveis"
                    descripition="Forme palavras com sílabas sobre reciclagem e meio ambiente"
                    competencia="EF01LP04"
                    image="img/icons/letras.png"
                    link="/att/roadMap"
                    atividade="Português"
                    time="20 min"
                    :isBlocked="true"
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
    gap: 2em;
    overflow-y: auto; /* Permite rolagem vertical */
    padding-right: 1rem; /* Espaço para evitar sobreposição com a barra de rolagem */
}

.content::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
}

.content::-webkit-scrollbar-thumb {
    background-color: #249B9B; /* Cor da barra de rolagem */
    border-radius: 4px;
}

.content::-webkit-scrollbar-thumb:hover {
    background-color: #1E7A7A; /* Cor ao passar o mouse */
}

</style>