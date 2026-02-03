// ------------------------ ATIVIDADES TEXTOS -----------------------//

export interface WordOption {
  id: number
  word: string
  img: string
}

export interface Exercise {
  id: number
  text: string
  words: WordOption[]
  level: number
}

export const exercises: Exercise[] = [
    {
        id: 1,
        text: "Os {1} funcionam como berçários naturais, servindo de abrigo e reprodução para diversas espécies de {2}, caranguejos, camarões e aves. Além disso, suas plantas ajudam a proteger o litoral da {3}, reduzindo o impacto das marés e das {4}.",
        words: [
            { id: 1, word: 'manguezais', img: 'img/att-textos/manguezais.png' },
            { id: 2, word: 'peixes', img: 'img/att-textos/peixes.png' },
            { id: 3, word: 'erosão', img: 'img/att-textos/erosao.png' },
            { id: 4, word: 'tempestades', img: 'img/att-textos/tempestades.png' },
        ],
        level: 1,
    },
    {
        id: 2,
        text: "O {1} é a remoção de {2} e vegetação das florestas. Ele causa muitos problemas para o meio ambiente: aumenta a {3} do ar, reduz a quantidade de água nos {4}, destrói o habitat de animais e contribui para as mudanças climáticas.",
        words: [
            { id: 1, word: 'desmatamento', img: 'img/att-silabas/desmatamento.png' },
            { id: 2, word: 'árvores', img: 'img/att-textos/arvores.png' },
            { id: 3, word: 'poluição', img: 'img/att-silabas/poluicao.png' },
            { id: 4, word: 'rios', img: 'img/att-textos/rios.png' },
        ],
        level: 1,
    },
    {
        id: 3,
        text: "Todos os dias jogamos fora muitas coisas: {1}, papéis, latas e plásticos. Mas nem tudo é {2}. Muitos desses materiais podem ser usados de novo. Isso é {3}. Quando reciclamos, ajudamos o planeta. O papel pode virar um novo {4}.",
        words: [
            { id: 1, word: 'garrafas', img: 'img/att-textos/garrafas.png' },
            { id: 2, word: 'lixo', img: 'img/att-textos/lixo.png' },
            { id: 3, word: 'reciclagem', img: 'img/att-textos/reciclar.png' },
            { id: 4, word: 'caderno', img: 'img/att-textos/caderno.png' },
        ],
        level: 1,
    },
    {
        id: 4,
        text: "Na APA Estuarina do Canal de Santa Cruz, os {1} protegem a costa e servem de abrigo para muitos {2}. Para evitar {3} e pesca predatória, o turismo precisa ser consciente. A {4} ajuda a reduzir resíduos e preservar a cultura local.",
        words: [
            { id: 1, word: 'manguezais', img: 'img/att-textos/manguezais.png' },
            { id: 2, word: 'peixes', img: 'img/att-textos/peixes.png' },
            { id: 3, word: 'lixo', img: 'img/att-textos/lixo.png' },
            { id: 4, word: 'reciclagem', img: 'img/att-textos/reciclar.png' },
        ],
        level: 1,
    },

]
