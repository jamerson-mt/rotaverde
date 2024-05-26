<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import NavBotton from '@/components/NavBotton.vue';
import Card from '@/components/Card.vue';
import Header from '@/components/Header.vue';
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
          <Card  
            title="Português"
            content="content"
            image="../../public/img/curuja.png"
            link="/att/port/escrita"
          />
          <Card  
            title="Raciocínio Lógico"
            content="content"
            image="../../public/img/curuja.png"
            link="/"
          />
          <Card  
            title="Matemática"
            content="content"
            image="../../public/img/curuja.png"
            link="/"
          />
          <Card  
            title="Tecnologia"
            content="content"
            image="../../public/img/curuja.png"
            link="/"
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
