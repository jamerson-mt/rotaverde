// ---------------------------- LÓGICA JOGO DA MEMÓRIA -------------------------- //

interface Resposta {
    cor: string;
}

interface Sequencia {
    round: number;
    azul: number;
    vermelho: number;
    verde: number;
    laranja: number;
    resposta: Resposta[]; 
}

export class GameMemoria {
    rodada: number;
    pontos: number;
    sequencia: Sequencia[];

    constructor() {
        this.rodada = 0; 
        this.pontos = 0;
        this.sequencia = [];
    }

    iniciarGame(novaSequencia: Sequencia[]) {
        this.rodada = 0;
        this.pontos = 0;
        this.sequencia = novaSequencia;
    }

    verificarResposta(resposta: Resposta[]) {
        const respostaCorreta = this.sequencia[this.rodada].resposta;
        if (resposta.length === respostaCorreta.length && resposta.every((val, index) => val.id === respostaCorreta[index].id)) {
            this.pontos += 100;
        }
        this.rodada++;
    }
}

// ---------------------------- INÍCIO DO JOGO -------------------------- //

const novoJogo = new GameMemoria();
const novaSequencia: Sequencia[] = [
    {
        round: 1,
        azul: 100,
        vermelho: 0,
        verde: 0,
        laranja: 0,
        resposta: [
        { 
            cor: 'azul'
        }]
    },
];




