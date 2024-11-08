<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import NavBotton from "portuguese/components/NavBotton.vue";
import CardEmpty from "user/components/CardEmpty.vue";
import Header from "reasoning/components/Header.vue";
import { ref, onMounted } from "vue";
import Buzina from "auth/components/Buzina.vue";
import CardIonic from "manager/components/CardIonic.vue";

const frase = ref("SeleçãoTema");
interface Categoria {
  id: number;
  name: string;
  description: string;
  status: string;
  userId: number;
  urlImage: string;
}

const categorias = ref<Categoria[]>([]);

const fetchCategorias = async () => {
  try {
    const response = await fetch("https://idipibex.online/api/categories/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    categorias.value = data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
  }
};

onMounted(() => {
  fetchCategorias();
});
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <Header color="#249B9B" />
        <Buzina :frase="frase" />
      </div>

      <div id="container">
        <CardIonic
          v-for="categoria in categorias"
          :key="categoria.id"
          :id="categoria.id.toString()"
          :name="categoria.name"
          :description="categoria.description"
          :status="categoria.status"
          :userId="categoria.userId.toString()"
          :urlImage="categoria.urlImage"
          :title="categoria.name"
          :link="'user/modules'"
        />
        <CardEmpty message="Criar categoria" />
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
  margin-top: 60px;
  padding: 0px 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
