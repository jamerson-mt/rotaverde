import router from "@/router";

export function nextPage(rota: string, frase: string) {
    const audio = new Audio(`/audio/${frase}.mp3`);
    audio.addEventListener("canplaythrough", () => {
        router.push(rota);
        playAudio(frase);
    });
    audio.addEventListener("error", () => {
        console.error(`Erro ao carregar o áudio: /audio/${frase}.mp3`);
    });
}

export function playAudio(fileName: string) {
    setTimeout(() => {
        const audio = new Audio(`/audio/${fileName}.mp3`);
        audio.addEventListener("canplaythrough", () => {
            audio.play();
        });
        audio.addEventListener("error", () => {
            console.error(`Erro ao carregar o áudio: /audio/${fileName}.mp3`);
        });
    }, 800); // Atraso de 800ms
}

export default { nextPage, playAudio };