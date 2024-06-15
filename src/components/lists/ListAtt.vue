<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps ({
    item: {
        type: Object,
        required: true
    } 
});

</script>

<template>
    <div class="list-item">
        <div class="img">
            <img src="../../../public/img/list/circulo.svg" alt="circulo" />
        </div>
        <div class="content">
            <RouterLink :to="props.item.route">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </RouterLink>
        </div>
        <div class="img">
            <img src="../../../public/img/list/seta.svg" alt="seta" />
        </div>
  </div>
</template>

<style scoped>
.list-item {
    display: flex;
    width: 90%;
    height: 120px;
    border-radius: 10px;
    align-items: center;
    margin-top: -2.5rem;
    margin-left: auto;
}

.img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    margin-left: 10px;
}

h3 {
    font-size: 1.2rem;
    font-weight: bold;
}

p {
    font-size: 0.7rem;
    color: #707070;
    margin-top: -2px;
}
</style>