<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import NavBotton from "portuguese/components/NavBotton.vue";
import Card from "user/components/Card.vue";
import HeaderPerfil from "auth/components/HeaderPerfil.vue";
import FormPerfil from "auth/components/FormPerfil.vue";
import Buzina from "auth/components/Buzina.vue";
import { falar } from "@/utils/utils";
import { speakText, speek } from "portuguese/services/fala";
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <HeaderPerfil />
      </div>

      <div id="container">
        <FormPerfil />
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
  margin-top: 130px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

#navButton {
  position: fixed;
  bottom: 0rem;
  width: 100%;
}
</style>
