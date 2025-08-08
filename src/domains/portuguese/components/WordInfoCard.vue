<template>
  <div class="word-info-card">
    <h3>{{ title }}</h3>
    <img :src="image" alt="Imagem da palavra" />
    <p>{{ description }}</p>
    <button @click="$emit('close')">Fechar</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  image: String,
  description: String,
});
</script>

<style scoped>
.word-info-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  z-index: 1100;
}

.word-info-card h3 {
  margin-top: 0;
  color: #222;
}

.word-info-card img {
  width: 100%;
  height: auto;
  margin: 10px 0;
}

.word-info-card p {
  color: #444;
}

.word-info-card button {
  margin-top: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.word-info-card button:hover {
  background-color: #004494;
}
</style>
