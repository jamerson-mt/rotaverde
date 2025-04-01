import router from "@/router";

export function nextPage(rota: string, frase: string) {
    const audio = new Audio(`/audio/${frase}.mp3`);
    let audioPlayed = false;

    audio.addEventListener("canplaythrough", () => {
        audioPlayed = true;
        audio.play();
        router.push(rota);
    });

    audio.addEventListener("error", () => {
        console.error(`Erro ao carregar o áudio: /audio/${frase}.mp3`);
        if (!audioPlayed) {
            router.push(rota); // Fallback para navegação
        }
    });

    // Timeout para garantir que a navegação ocorra mesmo se o áudio demorar
    setTimeout(() => {
        if (!audioPlayed) {
            router.push(rota);
        }
    }, 3000); // 3 segundos de espera
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