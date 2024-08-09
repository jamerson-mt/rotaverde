<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="list-item">
    <div class="img">
      <img src="img/list/list1.jpg" alt="atividade" />
    </div>
    <div class="content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
    <div class="img seta">
      <RouterLink :to="props.item.route">
        <img src="img/list/seta.svg" alt="atividade" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
.seta {
  position: relative;
  margin-top: 15px;
  padding: 9px 15px;
  border-radius: 50%;
  background-color: #249b9b;
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

  font-family: "Poppins", sans-serif;
  font-style: bold;
}

p {
  font-size: 0.7rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-style: bold;
  color: #707070;
  margin-top: -2px;
}
</style>
