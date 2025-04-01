import router from "@/router";

export function nextPage(rota:string, audio:string) {
 
    router.push(rota);
    playAudio(audio+".mp3");
}

export function playAudio(fileName:string) {
    setTimeout(() => {
        const audio = new Audio(`/public/audio/${fileName}`);
        audio.play();
    }, 800); // Atraso de 500ms
}

export default { nextPage, playAudio };