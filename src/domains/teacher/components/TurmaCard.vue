<template>
  <div class="turma-card">
    <h3>{{ turma.nome }}</h3>
    <p>{{ alunosCount }} aluno(s)</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const API_URL = import.meta.env.VITE_API_URL;
const props = defineProps({
  turma: {
    type: Object,
    required: true,
  },
});

const alunosCount = ref(0);

const fetchAlunosCount = async () => {
  try {
    const response = await fetch(`${API_URL}aluno`);
    if (!response.ok) {
      throw new Error('Erro ao buscar alunos');
    }
    const data = await response.json();
    alunosCount.value = data.filter((aluno: any) => aluno.turmaId === props.turma.id).length;
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
  }
};

onMounted(() => {
  fetchAlunosCount();
});
</script>

<style scoped>
.turma-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 12px; /* Borda mais arredondada */
  padding: 1rem 1.5rem; /* Espaçamento interno maior */
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); /* Sombra mais suave */
  margin-right: 0.5rem;
  white-space: wrap;
}

.turma-card h3 {
  margin: 0;
  font-size: 16px;
  color: #00664f;
  text-align: center;
}
</style>
