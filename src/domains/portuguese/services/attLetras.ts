
// ------------------------ ATIVIDADES DE ESCRITA -----------------------//

export interface Exercise {
    image: string;
    options: 
    { 
        option1: string;
        option2: string;
        option3: string;
        response: string;
        [key: string]: string;
    }
}

export const exercise: Exercise[] = [
    {
        image: "../img/peixe.jpg",
        options: {
            option1: "B",
            option2: "P",
            option3: "C",
            response: "P",
        }
    },
]