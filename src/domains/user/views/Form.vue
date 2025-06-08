<script>
import { IonContent } from '@ionic/vue';

export default {
  data() {
    return {
      currentQuestionIndex: 0,
      perguntas: [
        { pergunta: 'Qual é o seu nome?', key: 'nome', tipo: 'text' },
        { pergunta: 'Você tem alguma deficiência?', key: 'deficiencia', tipo: 'select', opcoes: ['Sim', 'Não'] },
        { pergunta: 'Qual o seu sexo?', key: 'sexualidade', tipo: 'select', opcoes: ['Masculino', 'Feminino', 'Outro'] },
        { pergunta: 'Qual a sua idade?', key: 'idade', tipo: 'number' },
        { pergunta: 'Qual a sua ocupação?', key: 'ocupacao', tipo: 'select', opcoes: ['Trabalho formal', 'Trabalho informal', 'Apenas estudando', 'Atividades do lar', 'Pescador artesanal', 'Aposentado', 'Desempregado'] },
        { pergunta: 'Onde você mora?', key: 'cidade', tipo: 'select', opcoes: ['Igarassu', 'Itapissuma', 'Outro'] },
        { pergunta: 'Você possui acesso à internet?', key: 'internet', tipo: 'select', opcoes: ['Sim', 'Não'] },
        { pergunta: 'Você possui celular?', key: 'celular', tipo: 'select', opcoes: ['Sim', 'Não'] },
        { pergunta: 'Qual o seu nível de conhecimento com o uso de telefones celulares?', key: 'digital', tipo: 'select', opcoes: ['Nenhum', 'Básico', 'Intermediário', 'Avançado'] },
        { pergunta: 'Qual o seu nível de leitura e escrita?', key: 'escrita', tipo: 'select', opcoes: ['Não sei ler', 'Leio com dificuldade', 'Leitura e escrita básica', 'Leitura e escrita fluente'] }
      ],
      formData: {}
    };
  },
  computed: {
    perguntaAtual() {
      return this.perguntas[this.currentQuestionIndex];
    }
  },
  watch: {
    // Lê a pergunta sempre que a pergunta atual mudar
    currentQuestionIndex(newIndex) {
      const novaPergunta = this.perguntas[newIndex]?.pergunta;
      if (novaPergunta) this.falar(novaPergunta);
    }
  },
  mounted() {
    this.falar(this.perguntaAtual.pergunta); // lê a primeira pergunta ao carregar
  },
  methods: {
    nextQuestion() {
      const key = this.perguntaAtual.key;
      if (this.formData[key] !== '' && this.formData[key] !== undefined) {
        this.currentQuestionIndex++;
      } else {
        console.log('Por favor, responda antes de continuar.');
        this.falar('Por favor, responda antes de continuar.');
      }
    },
    handleSubmit() {
      const formData = new FormData();
      for (const key in this.formData) {
        formData.append(key, this.formData[key]);
      }

      fetch('https://script.google.com/macros/s/AKfycbw-rY_DpZHC8N1hJVYwu7-YYKGYMbPLletrA0B2STlLQ82Xsd6e46rzJkwYvlsFn7Wy0A/exec', {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          console.log('Formulário enviado com sucesso!');
          this.falar('Formulário enviado com sucesso!');
          this.currentQuestionIndex = 0;
          this.formData = {};
          this.$router.push('/home');
        })
        .catch((err) => {
          console.error('Erro ao enviar o formulário:', err);
          this.falar('Erro ao enviar o formulário.');
        });
    },
    falar(texto) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(texto);
      synth.cancel(); 
      synth.speak(utterance);
    },
    handleTyping(event) {
      const char = event.data || event.target.value.slice(-1);
      if (char && char !== ' ') {
        this.falar(char);
      }
    },
    handleSelect(event) {
      this.falar(event.target.value);
    }
  }
};
</script>

<template>
  <ion-content class="content">
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div v-if="currentQuestionIndex < perguntas.length">
          <label class="title" :for="perguntaAtual.key">{{ perguntaAtual.pergunta }}</label>

          <input
            v-if="perguntaAtual.tipo === 'text' || perguntaAtual.tipo === 'number'"
            v-model="formData[perguntaAtual.key]"
            :type="perguntaAtual.tipo"
            :id="perguntaAtual.key"
            required
            @input="handleTyping"
          />

          <select
            v-else-if="perguntaAtual.tipo === 'select'"
            v-model="formData[perguntaAtual.key]"
            :id="perguntaAtual.key"
            required
            @change="handleSelect"
          >
            <option value="" disabled selected>Selecione uma opção</option>
            <option
              v-for="opcao in perguntaAtual.opcoes"
              :key="opcao"
              :value="opcao"
            >
              {{ opcao }}
            </option>
          </select>

          <button type="button" @click="nextQuestion">Próxima</button>
        </div>

        <div v-else>
          <h3>Revisar respostas:</h3>
          <ul>
            <li v-for="(value, key) in formData" :key="key">
              <strong>{{ key }}:</strong> {{ value }}
            </li>
          </ul>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </ion-content>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0F3D3E 60%, #32846B 100%);
  color: #fff;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  background-image: url('/public/img/capas/i1.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.form-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.68);
  z-index: 1;
}

.form-container form {
  position: relative;
  z-index: 2;
  width: 100%;
}

label.title {
  display: block;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

input, select {
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background: #e6f2ef;
  color: #222;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

button {
  width: 80%;
  align-self: flex-end;
  background: #1e7c7d;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  cursor: pointer;
}

button:hover {
  background: #0F3D3E;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  width: 100%;
}

li {
  background: #e6f2ef;
  color: #222;
  border-radius: 8px;
  margin-bottom: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
}
</style>
