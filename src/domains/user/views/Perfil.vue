<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import NavBotton from "@/domains/portuguese/components/NavBotton.vue";
import Card from "@/domains/user/components/Card.vue";
import HeaderPerfil from "@/domains/auth/components/HeaderPerfil.vue";
import FormPerfil from "@/domains/auth/components/FormPerfil.vue";

import { speakText, speek } from "@/domains/portuguese/services/fala";

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
