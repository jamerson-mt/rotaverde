<script setup lang="ts">
import { ref } from "vue";
import AdicionarAluno from "./AdicionarAlunoPopup.vue";

interface Aluno {
  id: number;
  idade: any;
  nome: any;
  name: string;
  age: number;
}

defineProps<{
  alunos: Aluno[];
}>();

const mostrarPopup = ref(false);

function adicionarAluno() {
  mostrarPopup.value = true;
}

async function removerAluno(id: number) {
  try {
    const response = await fetch(`http://localhost:5198/api/aluno/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Erro ao remover aluno");
    }
    alert("Aluno removido com sucesso!");
    window.location.reload();
  } catch (error) {
    console.error("Erro ao remover aluno:", error);
    alert("Não foi possível remover o aluno.");
  }
}

</script>

<template>
  <div class="alunos-lista">
    <div class="title">
      <h2>Lista de Alunos</h2>
    </div>
    <ul>
      <li v-for="(aluno, index) in alunos" :key="index">
        <strong>{{ aluno.nome }}</strong> - {{ aluno.idade }} anos
        <button @click="removerAluno(aluno.id)" class="remove-button">Remover</button>
      </li>
    </ul>
    <button @click="adicionarAluno" class="add-button">Adicionar Aluno</button>
    <div v-if="mostrarPopup" class="popup-overlay">
      <AdicionarAluno/>
    </div>
  </div>
</template>

<style scoped>
.alunos-lista {
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

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1rem;
  color: #555;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}

.add-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #0056b3;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.close-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #a71d2a;
}

.remove-button {
  margin-left: 1rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #a71d2a;
}
</style>
