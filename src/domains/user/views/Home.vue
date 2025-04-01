<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import Card from '@/domains/user/components/Card.vue';
import Header from '@/domains/reasoning/components/Header.vue';
import { falar } from '@/utils/falar';
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <Header color="#249B9B" />


      </div>

      <div id="container">
        <Card
          @click="falar('cliqueparaprosseguir', 'SelecionarAtividade', '/att/roadMap')"
          title="Educação Ambiental" image="img/curuja.png" link="/home?q=pt" link2="/att/roadMap" bgc="#66FF7E" />
        <!-- <Card  @click="falar('raciocinio lóogico em manutenção')"  
            title="Raciocínio Lógico"
            image="img/curuja.png"
            link="#"
            link2="#"
            bgc="#F6A9CB"
          />
          <Card  @click="falar('matemática em manutenção')"  
            title="Matemática"
            image="img/curuja.png"
            link="#"
            link2="#"
            bgc="#59CAFC"
          />
          <Card  @click="falar('tecnologia em manutenção')"  
            title="Tecnologia"
            image="img/curuja.png"
            link="#"
            link2="#"
            bgc="#F07979"
          /> -->
      </div>
    </ion-content>
    <div id="navButton">

    </div>
  </ion-page>
</template>

<style scoped>
#container {
  display: flex;

  justify-content: space-around;
  margin-top: 100px;
  padding: 0px 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  overflow: hidden;
}
</style>
