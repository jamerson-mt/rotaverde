<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const props = defineProps ({
    title: {
        type: String,
        required: true
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
    user: {
        type: Object
    }

});


// Enviar User para a home

</script>

<template>
    <RouterLink :to="link" class="card">
        <div class="img">
            <img :alt="title" :src="image" />
        </div>
        <div class="content">
            <p>{{ title }}</p>
        </div>
    </RouterLink>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");


.card {
    display: flex;
    width: 90%;
    height: 120px;
    background-color: rgb(36, 155, 155, 40%);
    border-radius: 10px;
    align-items: center;
    margin-bottom: auto;
    border: solid 1px white;
    margin-top: 5px;
}

.content {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 10px;
}

p,.link{
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-style: medium;
    font-size: 18px;
    margin-left: 20px;
}

p {
    font-size: 19px;
    margin-bottom: 10px;
    margin-left: -5px;
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
    width: 4.5rem;
    height: 4.5rem;
    margin: auto;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
</style>