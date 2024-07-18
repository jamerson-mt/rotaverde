
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
            line1: ["C","A","S","A","A"],
            line2: ["F","G","H","O","L"],
            line3: ["K","L","P","N","A"],
            line4: ["P","O","R","S","M"],
            line5: ["C","V","W","X","Y"],
            line6: ["A","L","O","B","D"]
        },
        words: {
            word1: ["C","A","S","A"],
            word2: ["B","O","L","A"],
            word3: ["C","O","P","O"],
            word4: ["M","A","L","A"],
        }
    }

];