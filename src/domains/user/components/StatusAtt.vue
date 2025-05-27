 <script setup lang="ts">

const props = defineProps ({
    image: { type: String, required: true },
    title: { type: String, required: true },
    dificuldade: { type: String, required: false },
    status: { type: String, required: false },
    link: { type: String, required: true },
    tags: { type: Array as () => { tag: string }[], required: false },
    recorde: { type: String, required: false },
    tentativas: { type: String, required: false },
    aproveitamento: { type: String, required: false }
});

</script>

<template>
    <div class="card">
        <div class="content">
            <div class="header">
                <img :src="image" alt="Icone do jogo">
                <p>{{ title }}</p>
            </div>
            <div class="session1">
                <div class="d1">
                    <p>Dificuldade: <span>{{ dificuldade }}</span></p>
                    <p>Status: <span class="status">{{ status }}</span></p>
                </div>
                <div class="d2">
                    <p class="tags">Tags: 
                        <span v-for="tag in tags" :key="tag.tag" class="tag">{{ tag.tag }}</span>
                    </p>
                </div>
            </div>
            <div class="session2">
                <p>Recorde: <span>{{ recorde }}</span></p>
                <p>Tentativas: <span>{{ tentativas }}</span></p>
                <p>Aproveitamento: <span>{{ aproveitamento }}</span></p>
                <RouterLink class="jogar" :to="link">
                    <img src="/public/img/IconsHome/load.png">
                    <p>Jogar</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

.card {
    display: flex;
    color: #1E1E1E;
    margin-top: 1rem;
    width: 90%;
    height: 200px;
    background-color: #4DC591; 
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.content {
    height: 100%;
    padding: 1rem;
}

span {
    color: #f3eeee;
    font-weight: 600;
}

p {
    font-weight: 600;
}

.header {
    display: flex;
}

.header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
}

.header p {
    font-size: 1.5rem;
    font-weight: 600;
    align-self: center;
}

.session1 {
  display: flex;
  justify-content: space-between; 
  align-items: flex-start; 
  gap: 1rem; 
}

.d1, .d2 {
  flex: 1;
}

.d2 {
    display: flex;
}

.session1 p {
    font-size: 0.9rem;
    margin: 0.2rem 0;
}

.status {
    padding: 3px 10px;
    background-color: #137E60;
    border-radius: 10px;
}

.tags {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
}

.tag {
    width: 90%;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-style: medium;
    font-size: 15px;
    margin-right: 5px;
    color: #0F3D3E;
    background-color: #ECC055;
    text-align: center;
    border-radius: 5px;
    padding: 2px 5px;
    margin-left: 2rem;
    margin-bottom: 5px;
}

.session2 {
    position: relative;
    top: 2.3rem;
    left: -2rem;
    width: 126.7%;
    background-color: #F2A74E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    z-index: 2;
}

.session2 p {
    font-size: 0.9rem;
    margin: 0.2rem 0;
    margin-left: 1rem;
}

.session2 img {
    width: 30px;
    height: 30px;
}

.jogar {
    position: absolute;
    bottom: 2px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
}
</style>