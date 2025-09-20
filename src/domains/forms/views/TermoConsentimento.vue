<template>
  <div class="consent-form">
    <h2>Termo de Livre Consentimento</h2>
    <p ref="termText">
       Eu, abaixo assinado, autorizo a coleta e utilização dos meus dados para
      fins do projeto, conforme descrito neste termo.
    </p>
    <button @click="acceptConsent">Aceitar</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const termText = ref<HTMLElement | null>(null);

// Função para lidar com a aceitação do termo
function acceptConsent() {
  alert("Consentimento aceito!");
  window.location.href = "/home"; // Redireciona para a página inicial ou outra página
}

// Função para leitura do termo em voz alta
function readTerm() {
  if (termText.value) {
    const text = termText.value.textContent || "";
    const speech = new SpeechSynthesisUtterance("Termo de Livre consentimento."+text);
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
  }
}

// Ler o termo ao carregar a página
onMounted(() => {
  readTerm();
});
</script>

<style scoped>
.consent-form {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #333; /* Cor do texto ajustada para melhor contraste */
}
.consent-form h2 {
  margin-bottom: 8px;
  color: #000; /* Cor do título ajustada para destaque */
}
.consent-form p {
  margin-bottom: 16px;
  color: #555; /* Cor do parágrafo ajustada para legibilidade */
}
.consent-form button {
  background-color: #007bff; /* Cor de fundo azul */
  color: #fff; /* Cor do texto branca */
  border: none;
  padding: 10px 20px;
  border-radius: 4px; /* Bordas arredondadas */
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Transição suave */
}

.consent-form button:hover {
  background-color: #0056b3; /* Cor de fundo mais escura ao passar o mouse */
}
</style>
