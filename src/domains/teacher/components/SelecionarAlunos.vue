<template>
  <div class="selecionar-alunos">
    <h2>Alunos Selecionados</h2>
    <ul>
      <li v-if="!selectedStudents.length">Nenhum aluno selecionado.</li>
      <li v-for="student in selectedStudents" :key="student.id">
        {{ student.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { studentsState } from '../data/studentsState';

export default {
  computed: {
    selectedStudents() {
      return studentsState.students;
    },
  },
};
</script>

<style scoped>
.selecionar-alunos {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-height: 200px; /* Adicionado para scroll */
  overflow-y: auto; /* Adicionado para scroll */
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
}
</style>
