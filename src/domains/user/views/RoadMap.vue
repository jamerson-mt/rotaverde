<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import HeaderLevels from '@/domains/portuguese/components/HeaderLevels.vue';
  
import Unid from '@/domains/user/views/Unid.vue';
import Exercise from '@/domains/portuguese/components/Exercise.vue';



function falar(message: string) {
    console.log(message);
}

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <HeaderLevels frase="selecione uma das atividades" />
            </div>
            <div class="container">
                <div class="component1">
                    <Unid img="img/roadMap/horse.png" />
                </div>
                <div class="component2">
                    <Exercise img="img/roadMap/pencil.png" title="Escrita" link="pt/escrita" />
                </div>
                <div class="component3" @click="falar('CaçaPalavras')">
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
    margin-top: 20px;
    gap: 30px;
    align-items: center;
}

.NavBotton {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.component3 {
    position: relative;
    left: -5rem;
}

.component4 {
    position: relative;
    right: -5rem;
    top: -8.7rem
}

.component5 {
    position: relative;
    top: -9rem;
    --exercise-img-width: 1.5rem;
}
</style>