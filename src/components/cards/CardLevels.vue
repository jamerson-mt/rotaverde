<script setup lang="ts">

const props = defineProps({
    title: String,
    image: String,
    link: String,
});

</script>

<template>
    <div class="card">
        <div class="content">
            <p>{{ title }}</p>
            <RouterLink :to="link" class="link">
                Continuar
            </RouterLink>
        </div>
        <div class="img">
            <img :alt="title" :src="image" />
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    width: 98%;
    height: 100px;
    background-color: #249B9B;
    border-radius: 15px;
    align-items: center;
}

.content {
    width: 65%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 10px;
}

p {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 5px;
}

.link {
    color: rgb(3, 15, 74);
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: bold;
    background-color: white;
    padding: 3px 9px;
    border-radius: 15px;
}

.img {
    width: 4rem;
    height: 4rem;
    margin: auto;
}
</style>