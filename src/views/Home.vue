<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import NavBotton from '@/components/NavBotton.vue';
import Card from '@/components/Card.vue';
import Header from '@/components/Header.vue';
import { speakText, speek } from '../../public/ts/fala';
import { useRoute } from 'vue-router';



// Acessa a rota atual
const route = useRoute();
// Acessa o parâmetro de consulta 'q'

const handleClick = () => {
  const qp= route.query.q as string;
  if(qp=='i'){
    speakText(speek[2].text); 
  }else if (qp=='rl') {
    speakText('este quadro tem atividades de raciocionio lógico, para exercitar a capacidade de pensar rapidamente!'); 
  }else if (qp=='pt') {
    speakText('este quadro tem atividades de portugues, para exercitar os conhecimentos ja aprendidos!'); 
  }else if (qp=='mat') {
    speakText('este quadro tem atividades de matematica, para exercitar a capacidade de executar cálculos!'); 
  }else if (qp=='tec') {
    speakText('este quadro tem atividades de tecnologia, para exercitar os conhecimentos ja aprendidos!'); 
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
            content="content"
            image="../../../public/img/curuja.png"
            link="/home?q=pt"
            link2="/att/port/escrita"
          />
          <Card @click="handleClick" 
            title="Raciocínio Lógico"
            content="content"
            image="../../../public/img/curuja.png"
            link="/home?q=rl"
            link2="/att/rl"
          />
          <Card  @click="handleClick"
            title="Matemática"
            content="content"
            image="../../../public/img/curuja.png"
            link="/home?q=mat"
            link2="/att/mat"
          />
          <Card  @click="handleClick"
            title="Tecnologia"
            content="content"
            image="../../../public/img/curuja.png"
            link="/home?q=tec"
            link2="/att/tec"
          />
      </div>
    </ion-content>
    <div class="bottom-0">
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

</style>
