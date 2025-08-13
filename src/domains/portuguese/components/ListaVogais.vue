<template>
  <div class="lista-vogais">
    <h2>Vogais</h2>
    <button @click="lerTextoBotao" :style="{ backgroundColor: corBotao, color: '#ffffff' }">
      {{ estiloAtual === 'lowercase' ? 'minúscula' : 'MAIÚSCULA' }}
    </button>
    <ul>
      <li v-for="vogal in vogaisFormatadas" :key="vogal">
        <button @click="falar(vogal, palavras[vogal.toLowerCase()])" :style="{ fontStyle: estiloAtual === 'italic' ? 'italic' : 'normal', backgroundColor: '#f0f8ff', color: '#000000' }">{{ vogal }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaVogais",
  data() {
    return {
      vogais: ["A", "E", "I", "O", "U"],
      estiloAtual: "normal",
      palavras: {
        a: "abacaxi",
        e: "elefante",
        i: "igreja",
        o: "ocelote",
        u: "uva",
      },
      corBotao: "#007bff", // Cor inicial do botão
    };
  },
  computed: {
    vogaisFormatadas() {
      return this.estiloAtual === "lowercase"
        ? this.vogais.map((vogal) => vogal.toLowerCase())
        : this.vogais.map((vogal) => vogal.toUpperCase());
    },
  },
  methods: {
    falar(letra, palavra) {
      const utterance = new SpeechSynthesisUtterance(`${letra} de ${palavra}`);
      utterance.lang = "pt-BR";
      window.speechSynthesis.speak(utterance);
    },
    lerTextoBotao() {
      const texto = this.estiloAtual === "lowercase" ? "MAIÚSCULA" : "minúscula";
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "pt-BR";
      window.speechSynthesis.speak(utterance);
      this.alternarEstilo();
      this.corBotao = this.corBotao === "#007bff" ? "#28a745" : "#007bff"; // Alterna a cor do botão
    },
    alternarEstilo() {
      this.estiloAtual = this.estiloAtual === "normal" ? "lowercase" : "normal";
    },
  },
};
</script>

<style scoped>
.lista-vogais {
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.lista-vogais ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  justify-content: center;
}

.lista-vogais li {
  margin: 0;
}

.lista-vogais button {
  font-size: 1.5rem;
  padding: 10px 20px;
  cursor: pointer;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.lista-vogais button:hover {
  opacity: 0.9;
}
</style>
