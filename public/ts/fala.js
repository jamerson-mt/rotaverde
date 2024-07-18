
// ------------------------ ARMAZENAMENTO DAS MENSAGENS -----------------------//

export interface Speek {
    text: string;
    location: string;
}


export const speek: Speek[] = [
    {
        text: "Clique no botão azul para iniciar o aprendizado",
        location: "start"
    },
    {
        text: "Olá, seja bem vindo. É um prazer tê-lo aqui para juntos aprendermos sobre muitas áreas do conhecimento",
        location: "loading"
    },
    {
        text: "Esta é sua área de atividades e aulas do seu professor. Você pode selecionar um destes quadros para saber mais detalhes da atividade ou aula. Vamos tentar?",
        location: "Roadmap"
    },
    {
        text: "Nesta atividade você terá que descobrir qual a escrita e pronúncia correta de algumas imagens",
        location: "Home"
    },
    {
        text: "Qual a escrita correta da imagem em destaque?",
        location: "Atividade de escrita"
    },
    {
        text: "Aperte novamente para confirmar sua escolha, caso queria trocar selecione outra palavra",
        location: "Atividade de escrita opções"
    },
    {
        text: "Ha, infelizmente esta opção está incorreta. Tente de novo ou pule para a próxima imagem",
        location: "Opções erradas, tente de novo"
    },
    {
        text: "Parabens você acertou",
        location: "Opções certas"
    },
];


// ------------------------ IMPLEMENTAÇÃO -----------------------//

export function speakText(text: string) {
    function getVoiceAndSpeak() {
        let voicesList = speechSynthesis.getVoices();
        if (voicesList.length > 0) {
            let portugueseVoice: SpeechSynthesisVoice | null = voicesList.find(voice => voice.lang.startsWith('pt')) ?? null;
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = portugueseVoice;
            speechSynthesis.speak(utterance);
            return utterance;
        } else {
            console.error('No voices available');
        }
    }

    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', getVoiceAndSpeak);
    } else {
        return getVoiceAndSpeak();
    }
};




