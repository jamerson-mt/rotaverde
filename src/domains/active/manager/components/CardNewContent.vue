<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  methods: {
    nextPage() {
      // Usar vai forçar o vue a recarregar a página
      window.location.href = "/manager/contents/create";
    },
  },
});
</script>

<template>
  <div class="card" @click="nextPage">
    <div class="content">
      <img src="img/addModule.png" alt="Adicionar atividade" />
    </div>
  </div>
</template>

<style scoped>
  .card {
    text-decoration: none;
    color: #f0f8ff;
  }

  .content {
    background-color: #635b5b;
    display: flex;
    width: 5rem;
    height: 5rem;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    gap: 0.4rem;
    overflow: hidden;
  }

  .content img {
    position: relative;
    width: 4rem;
  }
</style>
