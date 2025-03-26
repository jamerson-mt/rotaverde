<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<template>
  <ion-app class="container">
    <ion-router-outlet />
  </ion-app>
</template>

<style scoped>
.container {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
}
</style>
