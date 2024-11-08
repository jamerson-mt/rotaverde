<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    nivel: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div class="card">
        <div class="content">
            <div class="shape"></div>
            <div class="head">
                <p>{{ props.title }}</p>
                <RouterLink :to="{
                    path: `/manager/modules/${props.id}`,
                    query: { data: JSON.stringify(props) }
                }">
                    <img src="img/group.png" alt="">
                </RouterLink>
            </div>
            <RouterLink to="/manager/contents" class="actions">
                <div class="action">
                    <img src="img/livro.png" alt="actionImage">
                    <span>Atividades: <strong>x</strong></span>
                </div>
                <div class="action">
                    <img src="img/nivel.png" alt="actionImage">
                    <span>Nivel: <strong>{{ props.nivel }}</strong></span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.content {
    position: relative;
    background-color: #8F98FF;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 6.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 12px;
    padding: 5px;
    gap: 0.4rem;
}

.shape {
    background-color: #636363;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 45px;
    border-radius: 30% 70% 0% 100% / 77% 0% 100% 23%;
    background-clip: content-box;
}

.actions {
    display: flex;
    flex-direction: column;
    gap: 0.2rem
}

.action {
    display: flex;
    gap: 0.4rem;
    font-size: 12px
}

.action span {
    color: #202020;
    font-weight: 600;
}

.action strong {
    color: white;
}

.action img {
    max-width: 1rem;
}


.content img {
    position: relative;
    width: 1.5rem;
}

.content #info {
    max-width: 1.4rem;
}

.head {
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 4px;
}

.head img {
    right: -15px;
    top: -4px;
}

p {
    font-weight: 600;
    font-size: 12px;
    color: white;
    max-width: 80%
}
</style>
