import { ref } from "vue";

const currentAudio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const playAudio = (audioPath: string) => {
  stopAudio(); // Garante que qualquer áudio em execução seja interrompido
  const audio = new Audio(audioPath);
  audio.play();
  currentAudio.value = audio;
  isPlaying.value = true;

  audio.onended = () => {
    isPlaying.value = false;
  };
};

const stopAudio = () => {
  if (currentAudio.value) {
    currentAudio.value.pause();
    currentAudio.value.currentTime = 0;
    currentAudio.value = null;
  }
  isPlaying.value = false;
};

export default {
  currentAudio,
  isPlaying,
  playAudio,
  stopAudio,
};
