<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import HeaderLevels from "@/components/header/HeaderLevels.vue";
import NavBotton from "@/components/NavBotton.vue";
import Quadro from "@/components/Quadro.vue";
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <HeaderLevels />
      </div>
      <div class="content">
        <div class="quadro">
            <Quadro />
        </div>
        <div class="palavras">
            
        </div>
      </div>
    </ion-content>
    <div id="navButton">
      <NavBotton />
    </div>
  </ion-page>
</template>

<style scoped>
    
    #navButton {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>