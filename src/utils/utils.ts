export function falar(frase: string) {
  const utterance = new SpeechSynthesisUtterance(frase);
  window.speechSynthesis.speak(utterance); 
  console.log(frase);
}
