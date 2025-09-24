<template>
  <div class="turma-card" @click="handleClick">
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

const emit = defineEmits(['click']);

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

const handleClick = () => {
  emit('click', { turma: props.turma, alunosCount: alunosCount.value });
};

onMounted(() => {
  fetchAlunosCount();
});
</script>

<style scoped>
.turma-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc; /* Cor da borda mais clara */
  border-radius: 16px; /* Borda mais arredondada */
  padding: 1.5rem 2rem; /* Espaçamento interno maior */
  background-color: #f9f9f9; /* Fundo mais suave */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Sombra mais destacada */
  margin-right: 1rem; /* Maior espaçamento lateral */
  white-space: wrap;
  transition: transform 0.2s, box-shadow 0.2s; /* Animação ao passar o mouse */
}

.turma-card:hover {
  transform: translateY(-4px); /* Elevação ao passar o mouse */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Sombra mais forte ao passar o mouse */
}

.turma-card h3 {
  margin: 0;
  font-size: 18px; /* Tamanho da fonte maior */
  color: #004d3f; /* Cor mais escura */
  text-align: center;
}
</style>
