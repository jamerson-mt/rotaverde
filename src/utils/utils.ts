export function falar(frase: string) {
  const utterance = new SpeechSynthesisUtterance(frase);
  utterance.lang = 'pt-BR'; // Define o idioma para português do Brasil
  window.speechSynthesis.speak(utterance);
  console.log(frase);
}
