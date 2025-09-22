<script setup lang="ts">
import {  computed } from "vue";
import CardAluno from "@/domains/teacher/components/CardAluno.vue";

interface Aluno {
  title: string;
  averageTime: string;
  classGroup: string;
}

const props = defineProps<{
  alunos: Aluno[];
  filterThreshold: number;
  sortByTime: boolean;
}>();

import { ref, watch } from "vue";

const localFilterThreshold = ref(props.filterThreshold);
const localSortByTime = ref(props.sortByTime);

watch(() => props.filterThreshold, () => {
});

watch(() => props.sortByTime, (newVal) => {
  localSortByTime.value = newVal;
});

watch(localSortByTime, (newVal) => {
  if (newVal !== props.sortByTime) {
    // Sync localSortByTime with the prop
    localSortByTime.value = newVal;
  }
});


const sortedAndFilteredAlunos = computed(() => {
  let result = props.alunos.filter(
    (aluno) => parseFloat(aluno.averageTime) <= localFilterThreshold.value
  );
  if (localSortByTime.value) {
    result = result.sort(
      (a, b) => parseFloat(a.averageTime) - parseFloat(b.averageTime)
    );
  }
  return result;
});

const getTimeClass = (averageTime: string) => {
  const time = parseFloat(averageTime);
  if (time <= 1) return "good-time"; // Verde
  if (time <= 2) return "medium-time"; // Amarelo
  return "bad-time"; // Vermelho
};
</script>

<template>
  <div class="alunos">
    <div class="title">
      <h2>Maior Ranking</h2>
    </div>
    <div class="filter">
      <label for="threshold">Filtrar por tempo médio até:</label>
      <input
        type="number"
        v-model="localFilterThreshold"
        min="0"
        step="0.1"
      />
      <label>
        <input type="checkbox" v-model="localSortByTime" />
        Ordenar por menor tempo
      </label>
    </div>
    <div class="cards-alunos">
      <CardAluno
        v-for="(aluno, index) in sortedAndFilteredAlunos"
        :key="index"
        :title="aluno.title"
        :average-time="aluno.averageTime"
        :class-group="aluno.classGroup"
        :class="[getTimeClass(aluno.averageTime)]"
      />
    </div>
  </div>
</template>

<style scoped>
.alunos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter label {
  font-size: 0.9rem;
  color: #555;
}

.cards-alunos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-height: 400px; /* Define a altura máxima */
  overflow-y: auto; /* Adiciona rolagem vertical */
  padding-right: 0.5rem; /* Espaço para a barra de rolagem */
}

.good-time {
  border: 2px solid #4caf50;
}

.medium-time {
  border: 2px solid #ffeb3b;
}

.bad-time {
  border: 2px solid #f44336;
}
</style>
