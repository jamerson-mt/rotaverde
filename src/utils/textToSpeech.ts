export function speakText(
  text: string,
  options?: { rate?: number; pitch?: number; volume?: number }
): void {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR"; // Define o idioma para português do Brasil
  utterance.rate = options?.rate ?? 1; // Taxa de fala (1 é o padrão)
  utterance.pitch = options?.pitch ?? 1; // Tom da fala (1 é o padrão)
  utterance.volume = options?.volume ?? 1; // Volume da fala (1 é o padrão)
  speechSynthesis.speak(utterance); // 
}
