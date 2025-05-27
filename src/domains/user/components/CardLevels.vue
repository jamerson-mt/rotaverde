<script setup lang="ts">

const props = defineProps ({
    title: { 
        type: String,
        required: true
    },
    descripition: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    atividade: {
        type: String,
        required: true
    },
    competencia: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    }
});

</script>

<template>
    <RouterLink class="card" :to="link">
            <div class="content">
                <p class="title">{{ title }}</p>
                <p class="descripition">{{ descripition }}</p>
                <p class="competencia">{{ competencia }}</p>
            </div>
            <div class="img">
                <p>{{ time }}</p>
                <img :alt="title" :src="image" />
            </div>
    </RouterLink>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");


.card {
    margin-top: 1rem;
    display: flex;
    width: 90%;
    height: 170px;
    background-color: #249B9B;
    border-radius: 10px;
    align-items: center;
    margin-bottom: auto;
}

.content {
    width: 74%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.title {
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
}

.descripition {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
}

.competencia {
    width: 40%;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-style: medium;
    font-size: 15px;
    margin-left: 20px;
    color: #0F3D3E;
    background-color: #ECC055;
    text-align: center;
    border-radius: 5px;
}

p {
    margin-left: 20px;
    margin-bottom: 5px;
}

.link {
    position: relative;
    color: rgb(3, 15, 74);
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    background-color: white;
    padding: 4px 8px;
    border-radius: 39px;
}

.img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
}

.img img {
    margin-top: 0.2rem;
}

.img p {
    position: relative;
    top: -8%;
    width: 100%;
    font-family: "DM Sans", sans-serif;
    border-radius: 10px;
    font-weight: 500;
    font-style: medium;
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
    padding: 5px;
    background-color: #FFFFFF33;
}
</style>