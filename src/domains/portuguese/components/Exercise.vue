<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';


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
            <router-link :to="link || ''"><img class="img" :src="img"></router-link>
                
          
        </div>
        <p>{{ title }}</p>
    </div>
</template>

<style scoped>
.image {
    position: relative;
    top: 3.5rem;
    background-color: #2cadad;
    width: 5.5rem;
    height: 5.5rem;
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
    top: 4rem;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
}
</style>