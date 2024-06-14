<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonContent } from "@ionic/vue";
</script>

<template>
  <ion-header class="rounded-b-3xl border-solid border-black">
    <div class="container">
           <div class="imagem"> <img src="/img/iconperson.png" alt="pessoa"></div></div>
  </ion-header>
</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    height: 90px;
    background-color: #249B9B;
}

.imagem {

    position: relative;
  background-color: #D9D9D9;
  width: 150px;
  border-radius: 50%;
  position: absolute;
  top: 40px;

}
img{
    height: 100%;
}


</style>
