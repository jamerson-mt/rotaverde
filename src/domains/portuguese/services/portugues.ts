
// ------------------------ MÓDULOS PORTUGUÊS -----------------------//

export interface Portugues {
    title: string;
    description: string;
    route: string
}

export const letras: Portugues[] = [
    {
        title: "Conhecendo as vogais",
        description: "Exercícios de escrita",
        route: "#"
    },
    {
        title: "Conhecendo as consoantes",
        description: "Exercícios de leitura",
        route: "#"
    },
    {
        title: "Alfabeto",
        description: "Silabário das dificuldades ortográficas",
        route: "#"
    }

];

export const silabas: Portugues[] = [
    {
        title: "Escrita correta",
        description: "Exercícios de escrita",
        route: "/att/port/escrita"
    },
    {
        title: "Caça palavras",
        description: "Exercícios de leitura",
        route: "/cacapalavras"
    },
    {
        title: "Silabário ",
        description: "Silabário das dificuldades ortográficas",
        route: "/silabario"
    }

];
