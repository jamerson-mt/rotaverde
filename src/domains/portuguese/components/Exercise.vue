<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    }
});
</script>

<template>
    <div class="content">
        <div class="image">
            <div ><img class="img" :src="img"></div>
                
          
        </div>
        <p>{{ title }}</p>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.image {
    position: relative;

    background-color: #2cadad;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: solid #C4C4C4 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img {
    width: var(--exercise-img-width, 3rem);
    height: var(--exercise-img-height, auto)
}

p {
    position: relative;
    top: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
}
</style>