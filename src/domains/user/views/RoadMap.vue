<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import HeaderLevels from '@/domains/portuguese/components/HeaderLevels.vue';
import Exercise from '@/domains/portuguese/components/Exercise.vue';

import { falar } from '@/utils/falar';



</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <HeaderLevels frase="selecione uma das atividades" />
            </div>
            <div class="container">
                <div class="component1" @click="falar('descobrirprimeiraletra', 'descobrirprimeiraletra2', 'pt/letras')">
                    <Exercise img="img/icons/letras.png" title="palavras Iniciais" link="pt/letras" />
                </div>

                <div class="component2" @click="falar('descobrirpalavra', 'descobrirpalavra2', 'pt/escrita')">
                    <Exercise img="img/roadMap/pencil.png" title="Escrita" link="pt/escrita" />
                </div>
                <div class="component3" @click="falar('cacapalavras', 'cacapalavras2', 'pt/cacapalavras')">
                    <Exercise img="img/roadMap/book.png" title="Caça palavras" link="pt/cacapalavras" />
                </div>
                <!-- <div class="component4" >
                    <Exercise 
                        img="img/roadMap/bike.png"
                        title="Silabário"    
                        link="pt/silabario"
                    />
                </div>
                <div class="component5" >
                    <Exercise 
                        img="img/icons/letras.png"
                        title="Letras"    
                        link="/user/contents/m/2"
                    />
                </div> -->
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: -10rem;
    gap: 30px;
    align-items: center;
}

.NavBotton {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>