<template>
  <div>
    <div v-if="isPlaying" class="audio-overlay">
      <div class="audio-content">
        <img src="/public/img/gifs/carpa.gif" alt="Executando áudio" />
        <button class="cancel-button" @click="stopAudio">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import router from "@/router";

export default defineComponent({
  name: "FalarComponent",
  setup() {
    const audioManager = inject("audioManager") as {
      playAudio: (audioPath: string) => void;
      stopAudio: () => void;
      isPlaying: boolean;
    };

    const cc = ref(0);
    const lastCardName = ref<string | null>(null);

    const falar = (name: string, audio1: string, audio2: string, rota: string) => {
      // Verifica se o card mudou
      if (lastCardName.value !== name) {
        cc.value = 0; // Reseta o contador
        lastCardName.value = name; // Atualiza o último card
      }

      if (cc.value === 0) {
        audioManager.playAudio(`/audio/${audio1}.wav`);
        cc.value = 1;
      } else {
        audioManager.playAudio(`/audio/${audio2}.wav`);
        router.push(rota); // Redireciona imediatamente no segundo clique
        cc.value = 0;
      }
    };

    return {
      falar,
      stopAudio: audioManager.stopAudio,
      isPlaying: audioManager.isPlaying,
    };
  },
});
</script>

<style scoped>
.audio-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: auto; 
}

.audio-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.audio-overlay img {
  width: 100px;
  height: 100px;
}

.cancel-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
