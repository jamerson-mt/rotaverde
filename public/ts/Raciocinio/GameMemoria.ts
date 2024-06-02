interface Resposta {
    index: number;
}

interface Sequencia {
    round: number;
    indices: number[];
    resposta: Resposta[];
}


// ---------------------------- INÍCIO DO JOGO -------------------------- //

export const novaSequencia: Sequencia[] = [
    {
        round: 1,
        indices: [0], 
        resposta: [
            { index: 0 } 
        ]
    },
    {
        round: 2,
        indices: [1, 2], 
        resposta: [
            { index: 1 }, 
            { index: 2 }  
        ]
    },
    {
        round: 3,
        indices: [3, 0, 1], 
        resposta: [
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }  
        ]
    },
    {
        round: 4,
        indices: [2, 3, 1, 0], 
        resposta: [
            { index: 2 }, 
            { index: 3 }, 
            { index: 1 }, 
            { index: 0 }  
        ]
    },
    {
        round: 5,
        indices: [2, 0, 3, 1, 2], 
        resposta: [
            { index: 2 }, 
            { index: 0 }, 
            { index: 3 }, 
            { index: 1 }, 
            { index: 2 }  
        ]
    },
    {
        round: 6,
        indices: [2, 3, 0, 1, 2, 3], 
        resposta: [
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }, 
            { index: 2 }, 
            { index: 3 }  
        ]
    },
    {
        round: 7,
        indices: [2, 0, 3, 1, 2, 3, 0], 
        resposta: [
            { index: 2 }, 
            { index: 0 }, 
            { index: 3 }, 
            { index: 1 }, 
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }  
        ]
    },
    {
        round: 8,
        indices: [2, 3, 0, 1, 2, 3, 0, 1], 
        resposta: [
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }, 
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }  
        ]
    },
    {
        round: 9,
        indices: [2, 0, 3, 1, 2, 3, 0, 1, 2], 
        resposta: [
            { index: 2 }, 
            { index: 0 }, 
            { index: 3 }, 
            { index: 1 }, 
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }, 
            { index: 2 }  
        ]
    },
    {
        round: 10,
        indices: [2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 
        resposta: [
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }, 
            { index: 2 }, 
            { index: 3 }, 
            { index: 0 }, 
            { index: 1 }, 
            { index: 2 }, 
            { index: 3 }  
        ]
    }
];
