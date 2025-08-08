// ---------------------------- CAÇA PALAVRAS ----------------------------------//

export interface Portugues {
    frame: {
        line1: string[];
        line2: string[];
        line3: string[];
        line4: string[];
        line5: string[];
        line6: string[];
    };
    words: {
        word1: {
            letters: string[];
            image: string;
            description: string;
        };
        word2: {
            letters: string[];
            image: string;
            description: string;
        };
        word3: {
            letters: string[];
            image: string;
            description: string;
        };
        word4: {
            letters: string[];
            image: string;
            description: string;
        };
        word5: {
            letters: string[];
            image: string;
            description: string;
        };
        word6: {
            letters: string[];
            image: string;
            description: string;
        };
    }
}

export const portugues: Portugues[] = [
    {
        frame: {
            line1: ["R", "E", "D", "E", "S", "O"],
            line2: ["P", "E", "I", "X", "E", "L"],
            line3: ["R", "I", "O", "A", "R", "E"],
            line4: ["C", "A", "N", "O", "A", "C"],
            line5: ["Á", "R", "V", "O", "R", "E"],
            line6: ["S", "O", "L", "A", "R", "E"],
        },
        words: {
            word1: {
                letters: ["R", "E", "D", "E"],
                image: "img/rede.jpg",
                description: "Uma rede de pesca usada para capturar peixes."
            },
            word2: {
                letters: ["P", "E", "I", "X", "E"],
                image: "img/peixe.jpg",
                description: "Um animal aquático que vive nos rios e oceanos."
            },
            word3: {
                letters: ["R", "I", "O"],
                image: "img/rio.jpg",
                description: "Um curso de água que flui em direção ao mar."
            },
            word4: {
                letters: ["C", "A", "N", "O", "A"],
                image: "img/canoa.jpg",
                description: "Uma pequena embarcação usada para navegar em rios."
            },
            word5: {
                letters: ["Á", "R", "V", "O", "R", "E"],
                image: "img/arvore.png",
                description: "Uma planta grande com tronco, galhos e folhas."
            },
            word6: {
                letters: ["S", "O", "L", "A", "R"],
                image: "img/solar.jpg",
                description: "Relacionado à energia proveniente do sol."
            }
        }
    }
];