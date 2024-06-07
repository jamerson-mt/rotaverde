
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
        image: "../img/casa.png",
        options: {
            option1: "casa",
            option2: "caza",
            option3: "casaa",
            option4: "cazaa",
            response: "casa",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/curuja.png",
        options: {
            option1: "coruja",
            option2: "curuja",
            option3: "corujaa",
            option4: "curujaa",
            response: "coruja",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/girafa.png",
        options: {
            option1: "girafa",
            option2: "girrafa",
            option3: "giraffa",
            option4: "girraffa",
            response: "girafa",
        }

    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/idoso.png",
        options: {
            option1: "idoso",
            option2: "idosa",
            option3: "idosoo",
            option4: "idosso",
            response: "idoso",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/trofeu.png",
        options: {
            option1: "trofeu",
            option2: "troféu",
            option3: "trofeuu",
            option4: "troféuu",
            response: "troféu",
        }
    },
    {
        title: "Qual a escrita correta para a imagem abaixo?",
        image: "../img/carro.jpg",
        options: {
            option1: "caro",
            option2: "carro",
            option3: "corra",
            option4: "corre",
            response: "carro",
        }
    }
];