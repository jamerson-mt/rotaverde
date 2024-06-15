<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

</script>



<template>
    <ion-tab-bar class="nav-botton" slot="bottom">
        <ion-tab-button  class="person-icon"   tab="profile" href="/perfil">
          <img src="../../public/img/nav_button/profle.svg" />
        </ion-tab-button>

        <ion-tab-button  class="listen-icon"  tab="listen" href="/home">
          <img src="../../public/img/nav_button/task.svg" />
        </ion-tab-button>

        <ion-tab-button  class="home-icon"   tab="home" href="/home">
          <img src="../../public/img/nav_button/home.svg" />
        </ion-tab-button>

        <ion-tab-button   class="win-icon"  tab="wins" href="/home">
          <img class="iconimg" src="../../public/img/nav_button/trofeu1.svg" />
        </ion-tab-button>

        <ion-tab-button  class="conf-icon"  tab="conf" href="/home">
          <img src="../../public/img/nav_button/configura.svg" />
        </ion-tab-button>
    </ion-tab-bar>
</template>

<style scoped>

/* CONSIDERAR O TAMANHO DA TELA ATÉ A POSIÇÃO DO NAVBUTTON 
    * Adaptado para dispositivo de tela maior e para os celulares menores!
*/

.nav-botton {
    position: relative;
    bottom: 3.55rem;
    width: 100%;
    height: 72px;
    align-items: center;
    border-top: solid rgb(254, 254, 254) 1px;
    --background: #249B9B;
}

img{
    width: 45px;
    height: 45px;}

.person-icon img {
 
    background-color: #ffffff;
    padding: 9px;
    border-radius: 50%;
}

.listen-icon img {
   
    background-color: #ffffff;
    padding: 8px;
    border-radius: 50%;
}

.home-icon img {
    
    background-color: #ffffff;
    padding: 6px;
    border-radius: 50%;
}

.win-icon img {
    
    background-color: #ffffff;
    padding: 5px;
    border-radius: 50%;
}


.conf-icon img {
    
    background-color: #ffffff;
    padding: 9px;
    border-radius: 50%;
}

</style>