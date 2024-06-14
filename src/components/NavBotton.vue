<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
</script>

<template>
    <ion-tab-bar class="nav-botton" slot="bottom">
        <ion-tab-button class="person-icon" tab="profile" href="/home">
          <img src="../../public/img/nav_button/profle.svg" />
        </ion-tab-button>

        <ion-tab-button class="listen-icon" tab="listen" href="/home">
          <img src="../../public/img/nav_button/task.svg" />
        </ion-tab-button>

        <ion-tab-button class="home-icon"  tab="home" href="/home">
          <img src="../../public/img/nav_button/home.svg" />
        </ion-tab-button>

        <ion-tab-button  class="win-icon" tab="wins" href="/home">
          <img class="iconimg" src="../../public/img/nav_button/trofeu1.svg" />
        </ion-tab-button>

        <ion-tab-button class="conf-icon" tab="conf" href="/home">
          <img src="../../public/img/nav_button/configura.svg" />
        </ion-tab-button>
    </ion-tab-bar>
</template>

<style scoped>

.nav-botton {
    bottom: 0;
    height: 10vh;
    align-items: center;
    border-top: solid rgb(254, 254, 254) 1px;
    --background: #249B9B;
}

.person-icon img {
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    padding: 9px;
    border-radius: 50%;
}

.listen-icon img {
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    padding: 9px;
    border-radius: 50%;
}

.home-icon img {
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    padding: 6px;
    border-radius: 50%;
}

.win-icon img {
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    padding: 3px;
    border-radius: 50%;
}


.conf-icon img {
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    padding: 9px;
    border-radius: 50%;
}

</style>