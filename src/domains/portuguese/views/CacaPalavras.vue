<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import Quadro from "@/domains/portuguese/components/QuadroCacapalavras.vue";
import { portugues } from "../store/cacaPalavras";
import { ref } from "vue";
import Header from "@/domains/reasoning/components/Header.vue";

const { frame, words } = portugues[0];

const refresh = () => {
  document.querySelectorAll(".aviso").forEach(function (valor) {
    valor.setAttribute("style", "opacity:0; z-index:0;");
  });
};

const showInfoCard = ref(false);
const selectedWord = ref<null | { image: string; description: string }>(null);

const toggleInfoCard = () => {
  showInfoCard.value = !showInfoCard.value;
};

const pronunciar = (texto: string) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";
  synth.speak(utterance);
};

const pronunciarPalavra = (palavra: { letters: string[]; image: string; description: string }) => {
  pronunciar(palavra.letters.join(""));
  selectedWord.value = { image: palavra.image, description: palavra.description };
};
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <Header />
      </div>
      <div class="content">
        <div class="quadro">
          <Quadro :quadro="frame" :palavras="words" />
        </div>
        <div class="palavras">
          <div
            v-for="(palavra, palavraIndex) in Object.values(words)"
            :key="palavraIndex"
            @click="pronunciarPalavra(palavra)"
          >
            <p :class="palavra.letters.join('').toLowerCase()">{{ palavra.letters.join("") }}</p>
          </div>
        </div>
        <div v-if="selectedWord" class="word-details">
          <img :src="selectedWord.image" alt="Imagem da palavra" />
          <p>{{ selectedWord.description }}</p>
        </div>
      </div>
      <div class="aviso">
        <p class="sucesso">realizado com sucesso!</p>

        <div class="refresh" @click="refresh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M6.5 3.5c-2.412 1.378-4 4.024-4 7a8 8 0 0 0 8 8m4-1c2.287-1.408 4-4.118 4-7a8 8 0 0 0-8-8"
              />
              <path d="M6.5 7.5v-4h-4m12 10v4h4" />
            </g>
          </svg>
        </div>
      </div>
    </ion-content>
    <div id="navButton">
      <!-- Botão flutuante -->
      <button class="floating-button" @click="toggleInfoCard">
        ℹ️
      </button>
    </div>

    <!-- Card de informações -->
    <div v-if="showInfoCard" class="info-card">
      <h3>Objetivo da Atividade</h3>
      <p>
        Esta atividade tem como objetivo desenvolver habilidades de leitura e
        identificação de palavras em um quadro, promovendo a atenção e o
        reconhecimento de padrões.
      </p>
      <h5>Conexão com a BNCC</h5>
      <ul>
        <li><strong>EF01LP01:</strong> Reconhecer palavras em textos simples.</li>
        <li><strong>EF01LP02:</strong> Identificar padrões de escrita e leitura.</li>
      </ul>
      <button @click="toggleInfoCard">Fechar</button>
    </div>
  </ion-page>
</template>

<style scoped>
.refresh {
  margin: 0 auto;
}
.aviso {
  display: flex;
  flex-direction: column;
  top: 200px;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  background-color: green;
  opacity: 0;
  z-index: 0;
  text-align: center;
}
.sucesso {
  font-size: 2em;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
  background-color: transparent;
}

.letra-acendida {
  background-color: yellow;
}

.palavras {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 0px;
  margin-top: 10px;
}

.palavras p {
  margin: 0 10px;
  background-color: aqua;
  padding: 5px 10px;
  border-radius: 10px;
}

.floating-button {
  position: fixed;
  bottom: 20px; /* Retornou para a posição original */
  right: 20px; /* Retornou para a posição original */
  background-color: #0056b3; /* Azul mais suave */
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.floating-button:hover {
  transform: scale(1.1);
  background-color: #004494;
}

.info-card {
  position: fixed;
  bottom: 80px; /* Retornou para a posição original */
  right: 20px; /* Retornou para a posição original */
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.info-card h3,h5 {
  margin-top: 0;
  color: #222; /* Cor mais escura para o título */
}

.info-card p {
  color: #444; /* Cor mais escura para o texto */
}

.info-card ul {
  color: #444; /* Cor mais escura para os itens da lista */
}

.info-card li {
  margin-bottom: 5px;
}

.info-card button {
  margin-top: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.info-card button:hover {
  background-color: #004494;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.word-details {
  margin-top: 20px;
  text-align: center;
}

.word-details img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.word-details p {
  font-size: 1.2em;
  color: #333;
}
</style>
