<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
</script>

<template>
    <ion-tab-bar class="nav-botton" slot="bottom">
        <ion-tab-button tab="profile" href="/home">
          <img class="person-icon" 
            src="../../public/img/pessoa.png" />
        </ion-tab-button>

        <ion-tab-button tab="listen" href="/home">
          <img class="listen-icon" 
            src="../../public/img/ouvir.png" />
        </ion-tab-button>

        <ion-tab-button tab="home" href="/home">
          <img class="home-icon" 
            src="../../public/img/casa.png" />
        </ion-tab-button>

        <ion-tab-button tab="wins" href="/home">
          <img class="win-icon" 
            src="../../public/img/trofeu.png" />
        </ion-tab-button>

        <ion-tab-button tab="conf" href="/home">
          <img class="conf-icon" 
            src="../../public/img/conf.png" />
        </ion-tab-button>
    </ion-tab-bar>
</template>

<style scoped>

.nav-botton {
    bottom: 0;
}

.home-icon {
    width: 50px;
    height: 50px;
}

.listen-icon {
    width: 35px;
    height: 35px;
}

.person-icon {
    width: 45px;
    height: 45px;
}

.win-icon {
    width: 35px;
    height: 35px;
}

.conf-icon {
    width: 40px;
    height: 40px;
}

</style>