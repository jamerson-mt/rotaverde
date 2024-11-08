<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: false
        },
        shapeColor: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        route: {
            type: String,
            required: true
        }
    }
});
</script>

<template>
    <RouterLink :to="route" class="card">
        <div v-if="status=='Active' " class="content" :style="{ background: bgColor }">
            <div class="img">
                <img src="img/components/globo.svg" alt="globo">
                <img src="img/components/fundo.svg" alt="fundo">
            </div>
            <p>{{ title }}</p>
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
    width: 8rem;
    height: 6rem;
    align-items: flex-start;
    justify-content: space-around;
    border-radius: 12px;
    padding: 0px 10px;
    overflow: hidden;
    background-color: #8F98FF;
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
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
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
    color: white;
}
</style>
