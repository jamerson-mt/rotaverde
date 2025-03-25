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
        word1: string[];
        word2: string[];
        word3: string[];
        word4: string[];
    }
}

export const portugues: Portugues[] = [
    {
        frame: {
            line1: ["R","E","D","E","A"],
            line2: ["P","E","I","X","E"],
            line3: ["R","I","O","I","S"],
            line4: ["C","A","N","O","A"],
            line5: ["A","V","E","R","N"],
            line6: ["S","O","L","T","A"]
        },
        words: {
            word1: ["R","E","D","E"],
            word2: ["P","E","I","X","E"],
            word3: ["R","i","o"],
            word4: ["C","A","N","O","A"],
        }
    }
];