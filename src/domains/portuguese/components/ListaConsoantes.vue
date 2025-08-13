<template>
  <div class="lista-consoantes">
    <h2>Consoantes</h2>
    <button @click="lerTextoBotao" :style="{ backgroundColor: corBotao, color: '#ffffff' }">
      {{ estiloAtual === 'lowercase' ? 'minúscula' : 'MAIÚSCULA' }}
    </button>
    <ul>
      <li v-for="consoante in consoantesFormatadas" :key="consoante">
        <button @click="falar(consoante, palavras[consoante.toLowerCase()])" :style="{ fontStyle: estiloAtual === 'italic' ? 'italic' : 'normal', backgroundColor: '#f0f8ff', color: '#000000' }">{{ consoante }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaConsoantes",
  data() {
    return {
      consoantes: [
        "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", 
        "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"
      ],
      estiloAtual: "normal",
      palavras: {
        b: "bola",
        c: "cachorro",
        d: "dado",
        f: "foca",
        g: "gato",
        h: "helicóptero",
        j: "jacaré",
        k: "kiwi",
        l: "leão",
        m: "macaco",
        n: "navio",
        p: "pato",
        q: "queijo",
        r: "rato",
        s: "sapo",
        t: "tigre",
        v: "vaca",
        w: "whisky",
        x: "xícara",
        y: "yoga",
        z: "zebra",
      },
      corBotao: "#28a745", // Cor inicial do botão
    };
  },
  computed: {
    consoantesFormatadas() {
      return this.estiloAtual === "lowercase"
        ? this.consoantes.map((consoante) => consoante.toLowerCase())
        : this.consoantes.map((consoante) => consoante.toUpperCase());
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
      this.corBotao = this.corBotao === "#28a745" ? "#007bff" : "#28a745"; // Alterna a cor do botão
    },
    alternarEstilo() {
      this.estiloAtual = this.estiloAtual === "normal" ? "lowercase" : "normal";
    },
  },
};
</script>

<style scoped>
.lista-consoantes {
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.lista-consoantes ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  justify-content: center;
}

.lista-consoantes li {
  margin: 0;
}

.lista-consoantes button {
  font-size: 1.5rem;
  padding: 10px 20px;
  cursor: pointer;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.lista-consoantes button:hover {
  opacity: 0.9;
}
</style>
