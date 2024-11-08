<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import CardContent from "../../components/CardContent.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

interface Content {
  id: number;
  title: string;
}

const contents = ref<Content[]>([]);
const $route = useRoute();

onMounted(async () => {
  const id = $route.params.id;

  try {
    const response = await fetch(`https://idipibex.online/api/contents/modules/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar atividades");
    }
    const data = await response.json();
    contents.value = data;
  } catch (error) {
    console.error(error);
  }
});
console.log(0);
</script>

<template>
  <ion-page class="page">
    <ion-content>
      <div class="content">
        <div class="areas">
          <div class="title">
            <h1>Atividades</h1>
            <h2>mais recentes</h2>
          </div>
          <div class="cards">
            <CardContent
              v-for="content in contents"
              :key="content.id"
              :id="content.id"
              :title="content.title"
            />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  /* Removed the  
 global background setting */
  font-family: "Poppins", sans-serif;
}

.content {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  border-radius: 40px 0 0 0;
  padding-left: 1rem;
}

.title {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title h1 {
  font-weight: bold;
  font-size: 20px;
  color: #212523;
  margin: 0;
}

.title h2 {
  margin: 0;
  font-size: 14px;
  color: #bcc1cd;
}

.cards {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.cards a {
  padding: 0;
}

.cards-alunos {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
</style>
