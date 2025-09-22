<script setup lang="ts">
import {
  IonContent,
  IonPage,
} from "@ionic/vue";
import { ref, onMounted } from "vue";

import CardIonic from "@/domains/teacher/components/CardIonic.vue";
import TitleCategories from "@/domains/user/components/TitleCategories.vue";
import AlunosLista from "@/domains/teacher/components/AlunosLista.vue";

const alunos = ref([]); // Define os dados dos alunos como uma referência reativa

// Função para buscar os alunos da API
const fetchAlunos = async () => {
  try {
    const response = await fetch("http://localhost:5198/api/aluno");
    if (!response.ok) {
      throw new Error("Erro ao buscar alunos");
    }
    alunos.value = await response.json();
  } catch (error) {
    console.error("Erro ao carregar alunos:", error);
  }
};

// Busca os alunos ao montar o componente
onMounted(fetchAlunos);
</script>

<template>
  <div class="page">
    <ion-page>
      <ion-content>
        <div class="content">
          <div class="areas">
            <TitleCategories title="Painel Professor" route="teste" />

            <div class="title">
              <h1>Funcionalidades</h1>
              <h2>Mais Recentes</h2>
            </div>
            <div class="cards">
              <CardIonic
                title="Criar Turma"
                image="img/IconsHome/grupo.png"
                bg-color="#fff"
                shape-color="#00664f"
                link="/professor/create-turma"
              />
            </div>
          </div>

          <AlunosLista :alunos="alunos" />
        </div>
      </ion-content>
    </ion-page>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  /* Removed the  
 global background setting */
  font-family: "Poppins", sans-serif;
}

.background-green {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00664f;
  z-index: -1;
}

.vetor {
  position: relative;
  top: 2.1rem;
  right: -7.5rem;
  width: 70%;
  height: 30%;
  z-index: -1;
}

.livro {
  position: relative;
  top: -6.5rem;
  right: -10.8rem;
  width: 55%;
  height: 30%;
  z-index: 1;
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 55%;
  background: #fff;
  border-radius: 40px 0 0 0;
  padding-left: 1rem;
}

.navButton {
  position: absolute;
  bottom: 0;
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
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 380px; /* Define uma altura máxima para o container */
  overflow-y: auto; /* Adiciona scroll vertical */
  border: 1px solid #e0e0e0; /* Adiciona uma borda para destacar o container */
  padding: 0.5rem; /* Adiciona um espaçamento interno */
}

/* Estiliza a barra de rolagem */
.cards-alunos::-webkit-scrollbar {
  width: 8px;
}

.cards-alunos::-webkit-scrollbar-thumb {
  background: #00664f; /* Cor da barra de rolagem */
  border-radius: 4px;
}

.cards-alunos::-webkit-scrollbar-thumb:hover {
  background: #004d3a; /* Cor ao passar o mouse */
}

.cards-alunos::-webkit-scrollbar-track {
  background: #f0f0f0; /* Cor do fundo da barra de rolagem */
}

.filter {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px;
  background-color: #ffffff; /* Alterado para branco */
}

.high-time {
  border-left: 5px solid red; /* Barra vermelha para alunos com tempo alto */
}

.good-time {
  border-left: 5px solid green; /* Barra verde para alunos com bom tempo */
}

.medium-time {
  border-left: 5px solid yellow; /* Barra amarela para alunos com tempo médio */
}

.bad-time {
  border-left: 5px solid red; /* Barra vermelha para alunos com tempo ruim */
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #00664f; /* Cor personalizada para o checkbox */
  background-color: #ffffff; /* Fundo branco por padrão */
}

input[type="checkbox"]:not(:checked) {
  background-color: #ffffff; /* Fundo branco quando não marcado */
}
</style>
