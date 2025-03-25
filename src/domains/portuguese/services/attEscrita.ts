
// ------------------------ ATIVIDADES DE ESCRITA -----------------------//

export interface Exercise {
    title: string;
    image: string;
    options: 
    { 
        option1: string;
        option2: string;
        option3: string;
        option4: string;
        response: string;
        [key: string]: string;
    }
}

export const exercise: Exercise[] = [
    {
        title:"Qual a escrita correta para a imagem abaixo?",
        image: "../img/peixe.jpg",
        options: {
            option1: "peixe",
            option2: "peixi",
            option3: "pexe",
            option4: "peiche",
            response: "peixe",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/marisco.jpg",
        options: {
            option1: "marisco",
            option2: "marrisco",
            option3: "mariscu",
            option4: "marissco",
            response: "marisco",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/canoapesca.jpg",
        options: {
            option1: "canoa",
            option2: "canoua",
            option3: "camoa",
            option4: "kanoa",
            response: "canoa",
        }

    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/anzol.jpg",
        options: {
            option1: "anzol",
            option2: "ansol",
            option3: "anzou",
            option4: "azoul",
            response: "anzol",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/rio.jpg",
        options: {
            option1: "rio",
            option2: "riu",
            option3: "rrio",
            option4: "ril",
            response: "rio",
        }
    }
];