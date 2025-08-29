
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
    level: number;
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
        },
        level: 1
    },
    {
        image: "../img/peixe.jpg",
        title: "Peixe",
        options: {
            option1: "B",
            option2: "P",
            option3: "C",
            response: "P",
        },
        level: 1
    },
    {
        image: "../img/attLetras/sururu.jpg",
        title: "Sururu",
        options: {
            option1: "S",
            option2: "N",
            option3: "T",
            response: "S",
        },
        level: 2
    },
    {
        image: "../img/attLetras/caranguejo.jpg",
        title: "Caranguejo",
        options: {
            option1: "K",
            option2: "C",
            option3: "V",
            response: "C",
        },
        level: 3
    },
]