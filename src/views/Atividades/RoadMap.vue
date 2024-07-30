<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import HeaderLevels from '@/components/header/HeaderLevels.vue';
import NavBotton from '@/components/NavBotton.vue';
import Unid from '@/components/roadMap/Unid.vue';
import Exercise from '@/components/roadMap/Exercise.vue';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <HeaderLevels />
            </div>
            <div class="container">
                <div class="component1">
                    <Unid 
                        img="../../../public/img/roadMap/horse.png"
                        
                    />
                </div>
                <div class="component2">
                    <Exercise 
                        img="../../../public/img/roadMap/pencil.png"
                        title="Escrita"    
                        link="pt/escrita"
                    />
                </div>
                <div class="component3">
                    <Exercise 
                        img="../../../public/img/roadMap/book.png"
                        title="Caça palavras"    
                        link="pt/cacapalavras"
                    />
                </div>
                <div class="component4">
                    <Exercise 
                        img="../../../public/img/roadMap/bike.png"
                        title="Silabário"    
                        link="pt/silabario"
                    />
                </div>
                <div class="component5">
                    <Exercise 
                        img="../../../public/img/roadMap/block.png"
                        title="bloqueado"    
                    />
                </div>
            </div>
        </ion-content>
        <NavBotton />
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