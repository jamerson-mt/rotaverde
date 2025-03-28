
// ------------------------ ATIVIDADES DE ESCRITA -----------------------//

export interface Exercise {
    image: string;
    title: string;
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
        image: "../img/attLetras/camarao.png",
        title: "Camarão",
        options: {
            option1: "Z",
            option2: "M",
            option3: "C",
            response: "C",
        }
    },
    {
        image: "../img/peixe.jpg",
        title: "Peixe",
        options: {
            option1: "B",
            option2: "P",
            option3: "C",
            response: "P",
        }
    },
]