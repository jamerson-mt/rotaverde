<template>
  <div class="cadastrar-aluno">
    <h2>Cadastrar Novo Aluno</h2>
    <form @submit.prevent="submitForm">
      <input v-model="newStudent.name" placeholder="Nome do aluno" required />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newStudent: {
        name: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit('add', { ...this.newStudent });
      this.newStudent.name = '';
    },
  },
};
</script>

<style scoped>

*{
  color: #2e2e2e;
}
.cadastrar-aluno {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
h2 {
  color: #2e2e2e;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #27ae60;
}
</style>
