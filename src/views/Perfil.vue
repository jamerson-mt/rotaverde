<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import NavBotton from "@/components/NavBotton.vue";
import Card from "@/components/cards/Card.vue";
import HeaderPerfil from "@/components/header/HeaderPerfil.vue";
import FormPerfil from "@/components/forms/FormPerfil.vue";

import { speakText, speek } from "../../public/ts/fala";





</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <HeaderPerfil/>
      </div>

      <div id="container">
        
        <FormPerfil/>
      
      </div>
    </ion-content>
    <div id="navButton">
      <NavBotton />
    </div>
  </ion-page>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

#navButton {
  position: fixed;
  bottom: 0rem;
  width: 100%;
}
</style>
