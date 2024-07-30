<script setup lang="ts">
import { IonHeader } from "@ionic/vue";
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
    position: fixed;
    justify-content: center;
    height: 100px;
    background-image: url('../../../public/img/capas/capa2.jpeg');
}

.imagem {

    position: relative;
  background-color: #D9D9D9;
  width: 130px;
  border-radius: 50%;
  position: absolute;
  top: 30px;

}
img{
    height: 100%;
}


</style>
