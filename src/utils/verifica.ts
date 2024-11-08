let letrasAtividade: string[] = [];
let letrasOriginais: string[] = [];
let letraAtualIndex: number = 0;
let acertos: number = 0;
let c = 0;

export function start(letras: string[]) {
  c++;
  if (c > 1) {
    return;
  }
  letrasOriginais = [...letras]; // Mantém o array original para exibição
  letrasAtividade = embaralharArray([...letras]); // Embaralha uma cópia do array
  letraAtualIndex = 0;
  acertos = 0;
  console.log("Letras da atividade:", letrasAtividade);
  pronunciarLetraAtual();
}

export function verifica(letraClicada: string, moduleId: number) {
  const letraAtual = letrasAtividade[letraAtualIndex];
  if (letraClicada === letraAtual) {
    console.log("Correto! Letra clicada:", letraClicada);
    const frase = "letra correta!";
    const utterance = new SpeechSynthesisUtterance(frase);
    window.speechSynthesis.speak(utterance);
    acertos++;
    if (acertos >= 5) {
      console.log("Atividade concluída!");
      const fraseFinal = "Parabéns! Você concluiu a atividade!";
      const utteranceFinal = new SpeechSynthesisUtterance(fraseFinal);
      window.speechSynthesis.speak(utteranceFinal);
      window.location.href = `/user/contents/m/${moduleId}`;
      return;
    }
    letraAtualIndex++;
    if (letraAtualIndex < letrasAtividade.length) {
      pronunciarLetraAtual();
    } else {
      letraAtualIndex = 0; // Reinicia o índice se chegar ao final do array
      pronunciarLetraAtual();
    }
  } else {
    const frase = "letra incorreta, tente novamente!";
    const utterance = new SpeechSynthesisUtterance(frase);
    window.speechSynthesis.speak(utterance);
    console.log(
      "Incorreto! Letra clicada:",
      letraClicada,
      "Letra esperada:",
      letraAtual
    );
  }
}

function pronunciarLetraAtual() {
  if (letraAtualIndex < letrasAtividade.length) {
    const letraAtual = letrasAtividade[letraAtualIndex];
    const utterance = new SpeechSynthesisUtterance(letraAtual);
    window.speechSynthesis.speak(utterance);
    console.log("Pronunciando letra:", letraAtual);
  }
}

function embaralharArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}