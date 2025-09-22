<template>
  <div class="listar-alunos">
    <h2>Listagem de Alunos</h2>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }}
        <button @click="selectStudent(student)">Selecionar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectStudent(student) {
      this.$emit('select', student); // Emite o evento ao selecionar um aluno
    },
  },
};
</script>

<style scoped>
.listar-alunos {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
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
