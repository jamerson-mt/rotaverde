import router from "@/router";

export function nextPage(rota: string, frase: string) {
    const audio = new Audio(`/public/audio/${frase}.mp3`);
    router.push(rota); // Navega imediatamente para a rota
    playAudio(frase); // Reproduz o áudio
    audio.addEventListener("error", () => {
        console.error(`Erro ao carregar o áudio: /audio/${frase}.mp3`);
    });
}

export function playAudio(fileName: string) {
    setTimeout(() => {
        const audio = new Audio(`public/audio/${fileName}.mp3`);
        audio.play(); // Reproduz o áudio imediatamente
        audio.addEventListener("error", () => {
            console.error(`Erro ao carregar o áudio: /audio/${fileName}.mp3`);
        });
    }, 800); // Atraso de 800ms
}

export default { nextPage, playAudio };