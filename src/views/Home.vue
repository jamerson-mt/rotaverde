<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import NavBotton from '@/components/NavBotton.vue';
import Card from '@/components/cards/Card.vue';
import Header from '@/components/header/Header.vue';
import { speakText, speek } from '../../public/ts/fala';
import { useRoute } from 'vue-router';

const route = useRoute();

const handleClick = () => {
  const qp= route.query.q as string;
  if(qp=='i'){
    speakText(speek[2].text); 
  }else if (qp=='rl') {
    speakText('este quadro tem atividades de raciocíonio lógico, para exercitar a capacidade de pensar rapidamente!'); 
  }else if (qp=='pt') {
    speakText('este quadro tem atividades de português, para exercitar os conhecimentos já aprendidos!'); 
  }else if (qp=='mat') {
    speakText('este quadro tem atividades de matematica, para exercitar a capacidade de executar cálculos!'); 
  }else if (qp=='tec') {
    speakText('este quadro tem atividades de tecnologia, para exercitar os conhecimentos já aprendidos!'); 
  }
};


</script>

<template>
  <ion-page>
      <ion-content :fullscreen="true">
      <div>
          <Header
            color="#249B9B"
          />
      </div>

      <div id="container">
          <Card @click="handleClick" 
            title="Português"
            image="../../public/img/curuja.png"
            link="/home?q=pt"
            link2="/att/modulo"
          />
          <Card @click="handleClick" 
            title="Raciocínio Lógico"
            image="../../public/img/curuja.png"
            link="/home?q=rl"
            link2="/att/rl/memoria"
          />
          <Card  @click="handleClick"
            title="Matemática"
            image="../../public/img/curuja.png"
            link="/home?q=mat"
            link2="/att/mat"
          />
          <Card  @click="handleClick"
            title="Tecnologia"
            image="../../public/img/curuja.png"
            link="/home?q=tec"
            link2="/att/tec"
          />
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
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

#navButton {
    position: fixed;
    bottom: 0rem;
    width: 100%;
}

</style>
