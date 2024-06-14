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

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");


.card {
    display: flex;
    width: 90%;
    height: 120px;
    background-color: #249B9B;
    border-radius: 10px;
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

p,.link{
    font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 18px;
  margin-left: 20px;
  text-transform: capitalize;
}

p {
    font-size: 18px;
    margin-bottom: 10px;
}

.link {
    position: relative;
    color: rgb(3, 15, 74);
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    background-color: white;
    padding: 4px 8px;
    border-radius: 39px;
}

.img {
    width: 4rem;
    height: 4rem;
    margin: auto;
}
</style>