<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

</script>



<template>
    <ion-tab-bar class="nav-botton" slot="bottom">
        <ion-tab-button  class="person-icon"   tab="profile" href="/perfil">
          <img src="img/nav_button/profle.svg" />
        </ion-tab-button>

        <ion-tab-button  class="listen-icon"  tab="listen" href="/home">
          <img src="img/nav_button/task.svg" />
        </ion-tab-button>

        <ion-tab-button  class="home-icon"   tab="home" href="/home">
          <img src="img/nav_button/home.svg" />
        </ion-tab-button>

        <ion-tab-button   class="win-icon"  tab="wins" href="/home">
          <img class="iconimg" src="img/nav_button/trofeu1.svg" />
        </ion-tab-button>

        <ion-tab-button  class="conf-icon"  tab="conf" href="/home">
          <img src="img/nav_button/configura.svg" />
        </ion-tab-button>
    </ion-tab-bar>
</template>

<style scoped>

.nav-botton {
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 85px;
  align-items: center;
  border-top: solid #737171 0.5px;
  --background: #fff;
}

img {
  width: 45px;
  height: 45px;
  border: solid #737171 1px;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 50%;
}


.home-icon img {
  background-color: #ffffff;
  padding: 14px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: solid #737171 1px;
}

/*
.person-icon img {
  background-color: #ffffff;
  padding: 9px;
  border-radius: 50%;
  border: solid #737171 1px;
}

.listen-icon img {
  background-color: #ffffff;
  padding: 8px;
  border-radius: 50%;
  border: solid #737171 1px;

}
.win-icon img {
  border: solid #737171 1px;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 50%;
}

.conf-icon img {
  border: solid #737171 1px;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 50%;
} */

</style>