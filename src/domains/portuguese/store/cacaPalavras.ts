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
        word5: string[];
        word6: string[];
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
            word1: ["R", "E", "D", "E"],
            word2: ["P", "E", "I", "X", "E"],
            word3: ["R", "I", "O"],
            word4: ["C", "A", "N", "O", "A"],
            word5: ["Á", "R", "V", "O", "R", "E"],
            word6: ["S", "O", "L", "A", "R"],
        }
    }
];