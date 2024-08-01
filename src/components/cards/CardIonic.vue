<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    props: {
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
        }
    }
});
</script>

<template>
    <RouterLink class="card" :to="link">
        <div class="content">
            <div class="img">
                <img :src="image" />
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
    position: relative;
    justify-content: center;
    margin-left: 1rem;
    width: 8.5rem;
    height: 5rem;
    border-radius: 12px;
    background: orange;
}

.content img {
    position: relative;
    top: 0.5rem;
    left: -0.5rem;
    width: 1.5rem;
}

.title {
    position: relative;
    top: 1rem;
    left: -1rem;
    font-size: 15px;
    color: aliceblue;
    font-weight: bold;
}
</style>
