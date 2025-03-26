<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ref } from "vue";
import CardIonic from "@/domains/active/manager/components/CardIonic.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

interface Module {
  id: number;
  title: string;
  status: string;
}

const modules = ref<Module[]>([]);

const $route = useRoute();

onMounted(async () => {
  const id = $route.params.id;

  try {
    const response = await fetch(`https://idipibex.online/api/modules/categories/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar modulos");
    }
    const data = await response.json();
    modules.value = data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <ion-page class="page">
    <ion-content>
      <div class="content">
        <div class="areas">
          <div class="title">
            <h1>Módulos</h1>
            <h2>Mais recentes</h2>
          </div>
          <div class="cards">
            <CardIonic
              v-for="module in modules"
              :key="module.id"
              :title="module.title"
              :status="module.status"
              :route="`/manager/contents/m/${module.id}`"
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

.areas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background: #fff;
  border-radius: 40px 0 0 0;
  padding-left: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
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
  gap: 0.8rem;
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
