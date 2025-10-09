<script>
import router from '@/router';
import audioManager from '@/utils/audioManager';


export default {
  data() {
    return {
      showLikertPopup: false,
      showWinPopup: false,
      likertEmojiMap: {
        'Concordo Totalmente': '😊',
        'Concordo um Pouco': '🙂',
        'Não Sei': '😐',
        'Discordo um Pouco': '🙁',
        'Discordo Totalmente': '😞'
      },

      currentQuestionIndex: 0,
      perguntas: [
        { pergunta: 'Função:', key: 'Função:', tipo: 'select', opcoes: ['Professor(a) EJA', 'Outro'] },
        { pergunta: 'Experiência com tecnologias educacionais:', key: 'Experiência com tecnologias educacionais:', tipo: 'select', opcoes: ['Baixa', 'Média', 'Alta'] },
        { pergunta: 'Dispositivo usado no Rota Verde:', key: 'Dispositivo usado no Rota Verde:', tipo: 'select', opcoes: ['Celular próprio', 'Tablet da escola', 'Ambos'] },
        { pergunta: 'Acesso à internet durante as aulas:', key: 'Acesso à internet durante as aulas:', tipo: 'select', opcoes: ['Funcionou bem', 'Teve falhas', 'Sem internet'] },
        { pergunta: 'O Rota Verde está alinhado à proposta da EJA e ao planejamento da turma', key: 'O Rota Verde está alinhado à proposta da EJA e ao planejamento da turma', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'Os conteúdos do jogo dialogam com a BNCC (Língua Portuguesa, Ciências da Natureza) e o contexto local', key: 'Os conteúdos do jogo dialogam com a BNCC (Língua Portuguesa, Ciências da Natureza) e o contexto local', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'Observei ganhos de letramento (vocabulário, consciência fonológica, leitura de palavras/frases).', key: 'Observei ganhos de letramento (vocabulário, consciência fonológica, leitura de palavras/frases).', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'Observei ganhos de compreensão ambiental (manguezal/estuarino, práticas sustentáveis, noções climáticas)', key: 'Observei ganhos de compreensão ambiental (manguezal/estuarino, práticas sustentáveis, noções climáticas)', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'O tempo de aula e a organização (duplas, compartilhamento de tablets) foram viáveis', key: 'O tempo de aula e a organização (duplas, compartilhamento de tablets) foram viáveis', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'O painel docente apoiou o acompanhamento formativo (progresso, dificuldades, tomada de decisão)', key: 'O painel docente apoiou o acompanhamento formativo (progresso, dificuldades, tomada de decisão)', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'A proposta é inovadora para a EJA, com gamificação significativa', key: 'A proposta é inovadora para a EJA, com gamificação significativa', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'A possibilidade de evoluir/editar conteúdos (itens/atividades) favorece atualização pedagógica', key: 'A possibilidade de evoluir/editar conteúdos (itens/atividades) favorece atualização pedagógica', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'A curva de uso (acesso, instruções, responsividade) foi adequada ao perfil da turma', key: 'A curva de uso (acesso, instruções, responsividade) foi adequada ao perfil da turma', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'A profundidade teórico metodológica (articulação conteúdo/ competências) é coerente com a EJA', key: 'A profundidade teórico metodológica (articulação conteúdo/ competências) é coerente com a EJA', tipo: 'select', opcoes: ['Concordo Totalmente', 'Concordo um Pouco', 'Não Sei', 'Discordo um Pouco', 'Discordo Totalmente'] },
        { pergunta: 'Você recomendaria a utilização desse Jogo digital educacional em outras escolas ou instituições?', key: 'Você recomendaria a utilização desse Jogo digital educacional em outras escolas ou instituições?', tipo: 'select', opcoes: ['Sim', 'Não', 'Talvez'] },  
      ],
      formData: {},
      customResponses: {}
    };
  },
  computed: {
    perguntaAtual() {
      return this.perguntas[this.currentQuestionIndex];
    },
    isLikert() {
      const p = this.perguntaAtual
      if (!p || !p.opcoes) return false
      return p.opcoes.length === 5 && p.opcoes[0] === 'Concordo Totalmente'
    }
  },
  watch: {
    currentQuestionIndex(newIndex) {
      const novaPergunta = this.perguntas[newIndex]?.pergunta;
      if (novaPergunta) this.falar(novaPergunta);
    }
  },
  mounted() {
    this.falar('Quero te conhecer melhor!');
    setTimeout(() => {
      this.falar(this.perguntaAtual.pergunta);
    }, 3000);
  },
  methods: {
    openLikert() {
      this.showLikertPopup = true
    },
    closeLikert() {
      this.showLikertPopup = false
    },
    chooseLikert(option) {
      const key = this.perguntaAtual.key
      this.formData[key] = option
      this.falar(option)
      this.closeLikert()
    },
    emojiFor(option) {
      return this.likertEmojiMap[option] || ''
    },
    nextQuestion() {
      const key = this.perguntaAtual.key;
      if (this.formData[key] === 'Outro' && this.customResponses[key]) {
        this.formData[key] = this.customResponses[key]
      }

      if (this.formData[key] !== '' && this.formData[key] !== undefined) {
        if (this.currentQuestionIndex < this.perguntas.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.handleSubmit();
        }
      } else {
        console.log('Por favor, responda antes de continuar.');
        this.falar('Por favor, responda para continuar.');
      }
    },
    handleSubmit() {
      const formData = new FormData();
      for (const key in this.formData) {
        formData.append(key, this.formData[key]);
      }
      fetch('https://script.google.com/macros/s/AKfycbyZvQoxh3S1N8J1oMsyj_0AKRx9nEBajnxctFKtVWN2hDNJIwlS6k9bO5NjyoO4kDv-/exec', {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          console.log('Formulário enviado com sucesso!');
          this.showWinPopup = true
          audioManager.playAudio(`public/audio/essaesuaarea.wav`);
          this.currentQuestionIndex = 0;
          this.formData = {};
          setTimeout(() => {
            this.showWinPopup = false
            router.push('/home')
          }, 1800)
        })
        .catch(() => {
          this.showWinPopup = true
          audioManager.playAudio(`public/audio/essaesuaarea.wav`);
          setTimeout(() => {
            this.showWinPopup = false
            router.push('/home')
          }, 1800)
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
    <a href="/home" class="skip-button">
      <p>Pular</p>
    </a>
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

          <div v-else-if="perguntaAtual.tipo === 'select'">
            <button
              v-if="isLikert"
              type="button"
              class="likert-open"
              @click="openLikert"
            >
              <span class="likert-open-inner">
                <span class="open-emoji">{{ formData[perguntaAtual.key] ? emojiFor(formData[perguntaAtual.key]) : '🔘' }}</span>
                <span class="open-label">{{ formData[perguntaAtual.key] || 'Selecione uma opção' }}</span>
              </span>
            </button>

            <div class="select-with-custom">
            <select
              v-if="!isLikert"
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
            <div v-if="formData[perguntaAtual.key] === 'Outro'" class="custom-input-inline">
              <input type="text" v-model="customResponses[perguntaAtual.key]" placeholder="Escreva sua resposta" @input="falar(customResponses[perguntaAtual.key])" />
            </div>
            </div>
          </div>

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
    <div v-if="showLikertPopup" class="likert-backdrop" @click.self="closeLikert">
      <div class="likert-popup">
        <h4>Escolha uma opção</h4>
        <div class="likert-options" role="list">
          <button
            v-for="opcao in perguntaAtual.opcoes"
            :key="opcao"
            class="likert-option"
            :class="{ selected: formData[perguntaAtual.key] === opcao }"
            @click="chooseLikert(opcao)"
            role="listitem"
            :aria-pressed="formData[perguntaAtual.key] === opcao"
          >
            <span class="emoji">{{ emojiFor(opcao) }}</span>
            <span class="label">{{ opcao }}</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Win popup -->
    <transition name="popup-fade">
      <div v-if="showWinPopup" class="win-backdrop">
        <div class="win-popup">
          <h3>Enviado com sucesso!</h3>
          <p>Obrigado por responder. Suas respostas foram enviadas.</p>
        </div>
      </div>
    </transition>
  </ion-content>
</template>

<style scoped>

.skip-button {
  position: absolute;
  width: 80px;
  text-align: center;
  top: 20px;
  right: 20px;
  background-color: #32846B;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  z-index: 10;
}

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
  background-color: rgba(0, 0, 0, 0.8);
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
  text-align: center;
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
  width: 100%;
  height: 3rem;
  align-self: flex-end;
  background: #1e7c7d;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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

.custom-input { margin-top: 8px }
.custom-input input { width: 100%; padding: 0.6rem 0.8rem; border-radius:8px; border:none; font-size:1rem }

/* Likert popup styles */
.likert-backdrop {
  position: fixed;
  inset: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
}
.likert-popup {
  background: #fff;
  color: #222;
  padding: 18px;
  border-radius: 12px;
  width: min(480px, 92%);
  text-align: center;
}
.likert-options { display:flex; gap:12px; justify-content:flex-start; margin: 12px 0; flex-wrap:nowrap; align-items:center; overflow-x:auto; padding: 6px 8px }
.likert-option { background: linear-gradient(180deg,#f7f9fa,#ffffff); border:1px solid rgba(6,107,88,0.08); padding:10px 12px; border-radius:12px; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; min-width:78px; transition: all 160ms ease; box-shadow: 0 6px 18px rgba(6,107,88,0.04) }
.likert-option .emoji { font-size: 1.8rem }
.likert-option { display:flex; align-items:center; justify-content:center; min-height:96px }
.likert-option .label { font-size:0.78rem; color:#064e3b; font-weight:700; text-align:center }
.likert-option:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(6,107,88,0.08) }
.likert-option.selected { background: linear-gradient(180deg,#059669,#10b981); border: 1px solid rgba(6,107,88,0.18); box-shadow: 0 12px 36px rgba(6,185,129,0.12); transform: translateY(-8px) }
.likert-option.selected .label { color: #ffffff }
.likert-option.selected .emoji { filter: drop-shadow(0 6px 12px rgba(6,107,88,0.14)) }
.likert-open { padding:10px 12px; border-radius:10px; background:#ffffffcc; color:#05221a; border:1px solid rgba(6,107,88,0.1); cursor:pointer; display:inline-flex; gap:10px; align-items:center }
.likert-open-inner { display:inline-flex; gap:10px; align-items:center }
.open-emoji { font-size:1.25rem }
.open-label { font-weight:700 }
.likert-close { margin-top:8px; background:#eee; border:none; padding:8px 12px; border-radius:8px; cursor:pointer }

@media (max-width:520px) {
  .likert-options { gap:8px; overflow-x:auto; padding: 8px }
  .likert-option { min-width:76px; padding:8px }
}

/* Win popup styles */
.win-backdrop { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background: rgba(0,0,0,0.5); z-index:99999 }
.win-popup { background: linear-gradient(180deg,#0f7b65,#10b981); color:#fff; padding:18px 22px; border-radius:12px; text-align:center; box-shadow: 0 18px 64px rgba(0,0,0,0.3) }
.win-popup h3 { margin:0 0 6px; font-size:1.4rem }
.popup-fade-enter-active, .popup-fade-leave-active { transition: opacity 260ms ease, transform 260ms ease }
.popup-fade-enter-from { opacity:0; transform: translateY(8px) scale(0.98) }
.popup-fade-enter-to { opacity:1; transform: translateY(0) scale(1) }
.popup-fade-leave-from { opacity:1 }
.popup-fade-leave-to { opacity:0; transform: translateY(6px) scale(0.98) }
</style>
