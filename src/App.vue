<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { speakText } from '@/domains/portuguese/services/fala'; // Importando a função speakText

const output = ref("Seu texto aparecerá aqui...");
const recognition = ref<SpeechRecognition | null>(null);
const ws = ref<WebSocket | null>(null);

function startRecognition() {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!window.SpeechRecognition) {
    alert("API de reconhecimento de fala não é suportada no seu navegador.");
    return;
  }

  recognition.value = new SpeechRecognition();
  recognition.value.lang = 'pt-BR';
  recognition.value.continuous = true;
  recognition.value.interimResults = true;

  recognition.value.onresult = (event: SpeechRecognitionEvent) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    output.value = transcript;

    if (transcript.toLowerCase().includes("jarvis")) {
      if (!ws.value || ws.value.readyState !== WebSocket.OPEN) {
        connectWebSocket();
      } else if (transcript.toLowerCase().includes("sair")) {
        ws.value?.close();
      }
    }

    // Enviar a transcrição para o WebSocket, se a conexão estiver aberta
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
      ws.value.send(transcript);
    }
  };

  recognition.value.onerror = (event: SpeechRecognitionError) => {
    console.error('Erro no reconhecimento de fala: ', event.error);
    output.value = "Erro ao reconhecer fala.";
  };

  recognition.value.onend = () => {
    console.log("Reconhecimento de fala finalizado.");
  };

  recognition.value.start();
}

function stopRecognition() {
  recognition.value?.stop();
}

function connectWebSocket() {
  ws.value = new WebSocket('ws://localhost:5245');

  ws.value.onopen = () => {
    console.log('Conectado ao servidor WebSocket');
  };

  ws.value.onmessage = (event: MessageEvent) => {
    console.log('Mensagem do servidor:', event.data);
    speakText(event.data); 
  };

  ws.value.onclose = () => {
    console.log('Desconectado do servidor WebSocket');
  };

  ws.value.onerror = (error: Event) => {
    console.error('Erro WebSocket:', error);
  };
}

onMounted(() => {
  startRecognition(); 
});

onBeforeUnmount(() => {
  ws.value?.close();
  stopRecognition();
});
</script>

<template>
  <ion-app class="container">
    <ion-router-outlet />
  </ion-app>
</template>

<style scoped>
.container {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
}
</style>
