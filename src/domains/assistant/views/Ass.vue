<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reconhecimento de Fala</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="speech-recognition">
        <ion-button expand="block" @click="startRecognition">
          Clique para falar
        </ion-button>
        <ion-button expand="block" v-if="recognition" @click="stopRecognition">
          Parar Reconhecimento
        </ion-button>
        <ion-text color="primary">
          <p>{{ output }}</p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { speakText } from '@/domains/portuguese/services/fala';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonText
  },
  data() {
    return {
      output: "Seu texto aparecerá aqui...",
      recognition: null,
      ws: null
    };
  },
  methods: {
    startRecognition() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!window.SpeechRecognition) {
        alert("API de reconhecimento de fala não é suportada no seu navegador.");
        return;
      }

      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'pt-BR';
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        this.output = transcript;

        if (transcript.toLowerCase().includes("jarvis")) {
          if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            this.connectWebSocket();
          } else if (transcript.toLowerCase().includes("sair")){
            this.ws.close();
          }
        }

        // Enviar a transcrição para o WebSocket, se a conexão estiver aberta
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(transcript);
        }
      };

      this.recognition.onerror = (event) => {
        console.error('Erro no reconhecimento de fala: ', event.error);
        this.output = "Erro ao reconhecer fala.";
      };

      this.recognition.onend = () => {
        console.log("Reconhecimento de fala finalizado.");
      };

      this.recognition.start();
    },
    stopRecognition() {
      if (this.recognition) {
        this.recognition.stop();
      }
    },
    connectWebSocket() {
      this.ws = new WebSocket('ws://localhost:5245');

      this.ws.onopen = () => {
        console.log('Conectado ao servidor WebSocket');
      };

      this.ws.onmessage = (event) => {
        console.log('Mensagem do servidor:', event.data);
        speakText(event.data);
      };

      this.ws.onclose = () => {
        console.log('Desconectado do servidor WebSocket');
      };

      this.ws.onerror = (error) => {
        console.error('Erro WebSocket:', error);
      };
    }
  },
  mounted() {
    this.startRecognition(); // Iniciar reconhecimento de fala ao montar o componente
  },
  beforeDestroy() {
    if (this.ws) {
      this.ws.close();
    }
    if (this.recognition) {
      this.recognition.stop();
    }
  }
};
</script>

<style scoped>
.speech-recognition {
  text-align: center;
  margin-top: 50px;
}

p {
  font-size: 18px;
  color: #333;
  margin-top: 20px;
}
</style>
