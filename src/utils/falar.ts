import { nextPage } from "./nextPage";

let cc = 0;

export function falar(audio1: string, audio2: string, rota: string) {
  if (cc === 0) {
    const audioPath = `/audio/${audio1}.wav`;
    const audio = new Audio(audioPath);
    audio.play();
    cc = 1;
  } else {
    nextPage(rota, audio2);
    cc = 0;
  }
}
