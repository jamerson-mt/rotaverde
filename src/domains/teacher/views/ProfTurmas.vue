<script>
import ListarAlunos from "../components/ListarAlunos.vue";
import SelecionarAlunos from "../components/SelecionarAlunos.vue";
import CadastrarAluno from "../components/CadastrarAluno.vue";
import TitleCategories from "@/domains/user/components/TitleCategories.vue";
export default {
  components: {
    ListarAlunos,
    SelecionarAlunos,
    CadastrarAluno,
    TitleCategories,
  },
  data() {
    return {
      selectedStudents: [],
      students: [
        { id: 1, name: "Aluno 1" },
        { id: 2, name: "Aluno 2" },
        { id: 3, name: "Aluno 3" },
      ],
      classData: {
        name: "",
        year: "",
        teacher: "",
      },
    };
  },
  methods: {
    handleSelect(student) {
      this.selectedStudents.push(student);
      this.students = this.students.filter((s) => s.id !== student.id);
    },
    handleAddStudent(newStudent) {
      // Lógica para adicionar o aluno
      console.log("Aluno adicionado:", newStudent);
    },
    createClass() {
      console.log("Dados da turma:", this.classData);
      console.log("Alunos selecionados:", this.selectedStudents);
      // Lógica para criar a turma
    },
  },
};
</script>

<template>
  <div class="prof-turmas">
    <TitleCategories title="Criar Turma" route="teacher/home" />
    <h1>Criar Turma</h1>
    <form @submit.prevent="createClass">
      <input v-model="classData.name" placeholder="Nome da Turma" required />
      <input v-model="classData.year" placeholder="Ano" type="number" required />
      <input v-model="classData.teacher" placeholder="Professor Responsável" required />
      <button type="submit">Criar Turma</button>
    </form>
    <ListarAlunos @select="handleSelect" />
    <SelecionarAlunos :selectedStudents="selectedStudents" />
    <CadastrarAluno @add="handleAddStudent" />
  </div>
</template>

<style scoped>
.prof-turmas {
  height: 100%;
  background-color: white;
  color: #333;
  font-family: Arial, sans-serif;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: scroll; /* Permite rolagem na tela principal */
}
h1 {
  color: #2c3e50;
}
form {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
form input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
form button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
form button:hover {
  background-color: #27ae60;
}
</style>
