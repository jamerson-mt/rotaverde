<script lang="ts">
import { defineComponent } from 'vue';

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
            required: false
        },
        image: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: true
        }
    },
    methods: {
        nextPage() {
            window.location.href = this.link || '#'; // Redireciona para a página desejada
        }
    }
});
</script>

<template>
    <div class="card" @click="nextPage()">
        <div class="content" :style="{ background: bgColor }">
            <div class="shape" :style="{ background: shapeColor }"></div>
            <div class="img">
                <img :src="image" />
                <a href="#"><img id="info" src="../../../../public/img/info.png"></a>
            </div>
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<style scoped>

.card {
    text-decoration: none;
    color: #2e2e2e;
    margin: 0.5rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 6rem;

}

.content {
    display: flex;
    flex-direction: column;
    position: relative;  
    width: 8rem;
    height: 6rem;
    align-items: flex-start;
    justify-content: space-around;
    border-radius: 12px;
    padding-left: 1rem;
    padding-right: 0.4rem;
    border: 2px solid #00664f;
    overflow: hidden;
}

.shape {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 30% 70% 0% 100% / 77% 0% 100% 23%;
    background-clip: content-box;
}

.img {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.content img {
    position: relative;
    width: 1.5rem;
}

.content #info {
    max-width: 1.4rem;
}


.title {
    position: relative;
    top: 1rem;
    left: -1rem;
    font-size: 15px;
    color: aliceblue;
    font-weight: bold;
}

p {
    font-weight: 600;
    font-size: 16px;
}
</style>
