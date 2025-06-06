import { nextPage } from "./nextPage";

// Esta função foi migrada para o componente FalarComponent.
// Recomenda-se usar o componente FalarComponent para reutilização e melhor integração com Vue.

let cc = 0;
let currentAudio: HTMLAudioElement | null = null;

export function falar(audio1: string, audio2: string, rota: string) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  if (cc === 0) {
    const audioPath = `/audio/${audio1}.wav`;
    currentAudio = new Audio(audioPath);
    currentAudio.play();
    cc = 1;
  } else {
    nextPage(rota, audio2);
    cc = 0;
  }
}
