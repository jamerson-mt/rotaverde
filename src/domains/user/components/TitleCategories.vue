<script setup lang="ts">

const props = defineProps ({
    title: { 
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="content">
        <RouterLink :to="route" class="title">
            <img src="/public/img/IconsHome/voltar.png">
            <p>{{ title }}</p>
        </RouterLink>
    </div>
</template>

<style scoped>

.title {
    margin-top: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}


.title img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
}

.title p {
    font-size: 1.5rem;
    color: #1E1E1E;
}

</style>