<template>
  <div class="listar-alunos">
    <h2>Listagem de Alunos</h2>
    <ul>
      <li v-if="!unallocatedStudents.length">Nenhum aluno disponível para seleção.</li>
      <li v-for="student in unallocatedStudents" :key="student.id">
        {{ student.nome }}
        <button @click="selectStudent(student)">Selecionar</button>
      </li>
    </ul>
    <div class="selecionar-alunos">
      <h2>Alunos Selecionados</h2>
      <ul>
        <li v-if="!selectedStudents.length">Nenhum aluno selecionado.</li>
        <li v-for="student in selectedStudents" :key="student.id">
          {{ student.nome }}
        </li>
      </ul>
      <button v-if="selectedStudents.length" @click="finalizeSelection">
        Finalizar
      </button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  classId: {
    type: Number,
    required: true
  }
});
import { ref, computed, onMounted } from 'vue';

const API_URL = import.meta.env.VITE_API_URL;

const students = ref([]);
const selectedStudents = ref([]);

const fetchStudents = async () => {
  try {
    const response = await fetch(`${API_URL}aluno`);
    if (!response.ok) throw new Error('Erro ao buscar alunos');
    students.value = await response.json();
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
  }
};

const unallocatedStudents = computed(() =>
  students.value.filter(student => !student.turmaId)
);

const selectStudent = (student) => {
  if (!selectedStudents.value.includes(student)) {
    selectedStudents.value.push(student);
    students.value = students.value.filter(s => s.id !== student.id);
  }
};

const finalizeSelection = async () => {
  try {
    const updates = selectedStudents.value.map(student => ({
      ...student,
      turmaId: props.classId, // Atualizado para usar classId
    }));

    for (const student of updates) {
      const response = await fetch(`${API_URL}aluno/${student.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
      if (!response.ok) throw new Error(`Erro ao atualizar aluno ${student.nome}`);
    }

    alert('Alunos atualizados com sucesso!');
    selectedStudents.value = []; // Limpa a lista de selecionados após a atualização
    fetchStudents(); // Recarrega a lista de alunos
  } catch (error) {
    console.error('Erro ao finalizar seleção:', error);
    alert('Erro ao finalizar seleção. Tente novamente.');
  }
};

onMounted(fetchStudents);
</script>

<style scoped>
.listar-alunos {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.selecionar-alunos {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
}
h2 {
  color: #2c3e50;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
</style>
