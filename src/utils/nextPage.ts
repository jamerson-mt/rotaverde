import router from "@/router";

export function nextPage(rota: string, frase: string) {
    const audio = new Audio(`/audio/${frase}.wav`);
    router.push(rota); // Navega imediatamente para a rota
    playAudio(frase); // Reproduz o áudio
    audio.addEventListener("error", () => {
        console.error(`Erro ao carregar o áudio: /audio/${frase}.wav`);
    });
}

export function playAudio(fileName: string) {
    setTimeout(() => {
        const audio = new Audio(`/audio/${fileName}.wav`);
        audio.play(); // Reproduz o áudio imediatamente
        audio.addEventListener("error", () => {
            console.error(`Erro ao carregar o áudio: /audio/${fileName}.wav`);
        });
    }, 800); // Atraso de 800ms
}

export default { nextPage, playAudio };