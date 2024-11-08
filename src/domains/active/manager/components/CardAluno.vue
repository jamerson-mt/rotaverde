<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: true
        },
        shapeColor: {
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
        }
    }
});
</script>

<template>
    <RouterLink class="card" :to="link">
        <div class="content" :style="{ background: bgColor }">
            <div class="shape" :style="{ background: shapeColor }"></div>
            <div class="header">
                <div class="user">
                    <img :src="image" />
                    <h3>{{ title }}</h3>
                </div>
                <a href="#"><img id="info"src="../../../../public/img/info.png"></a>
            </div>
            <div class="main-content">
                <span>Idade: <p> 18</p></span>
                <span>Escolaridade: <p> 3 Ano</p></span>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>

.card {
    text-decoration: none;
    color: aliceblue;
}

.content {
    display: flex;
    flex-direction: column;
    position: relative;  
    width: 90%;
    height: 9rem;
    align-items: flex-start;
    justify-content: space-around;
    border-radius: 12px;
    padding-left: 1rem;
    padding-right: 0.4rem;
    padding-top: 0.8rem;
    overflow: hidden;
}

.shape {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 80px;
    border-radius: 30% 70% 0% 100% / 77% 0% 100% 23%;
    background-clip: content-box;
}

.main-content {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
}

h3 {
    font-weight: 600;
    font-size: 20px;
    color: #212525;
}

.user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
}

span {
    display: flex;
    color: #212525;
    gap: 0.4rem;
    font-size: 18px;
    font-weight: 500;
}

p {
    font-weight: 600;
    font-size: 18px;
    color: aliceblue;
}

.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.content img {
    position: relative;
    width: 4em;
    background-color: aliceblue;
    border-radius: 50%;
}

.content #info {
    max-width: 2rem;
}


.title {
    position: relative;
    top: 1rem;
    left: -1rem;
    font-size: 18px;
    color: aliceblue;
    font-weight: bold;
}


</style>
