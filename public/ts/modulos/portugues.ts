
// ------------------------ MÓDULOS PORTUGUÊS -----------------------//

export interface Portugues {
    title: string;
    description: string;
    route: string
}

export const portugues: Portugues[] = [
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
        title: "Silabario ",
        description: "Silabario das dificuldades ortográficas",
        route: "/silabario"
    }

];