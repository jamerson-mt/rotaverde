<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    props: {
        link: {
            type: String,
            required: true
        },
    }
});
</script>

<template>
    <RouterLink :to="link" class="card">
        <div class="content">
            <img src="img/addModule.png" alt="Adicionar Módulo">
        </div>
    </RouterLink>
</template>

<style scoped>
.card {
    text-decoration: none;
    color: aliceblue;
}

.content {
    background-color: #635B5B;
    display: flex;
    width: 10rem;
    height: 6.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    gap: 0.4rem;
    overflow: hidden;
}


.content img {
    position: relative;
    width: 4rem;
}
</style>
