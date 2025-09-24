<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <h2>{{ turma.nome }}</h2>
      <p><strong>ID:</strong> {{ turma.id }}</p>
      <p><strong>Descrição:</strong> {{ turma.descricao || 'Sem descrição' }}</p>
      <p><strong>Quantidade de Alunos:</strong> {{ alunosCount }}</p>
      <button @click="closePopup">Fechar</button>
      <button @click="goToConfig">Configurações</button>
      <button @click="removeTurma">Remover Turma</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  turma: {
    type: Object,
    required: true,
  },
  alunosCount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
};

const goToConfig = () => {
    window.location.href = `/professor/turmas/${props.turma.id}`;
};
const API_URL = import.meta.env.VITE_API_URL 
const removeTurma = async () => {
  if (confirm('Tem certeza que deseja remover esta turma?')) {
    try {
      const response = await fetch(`${API_URL}turma/${props.turma.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: props.turma.id })
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      alert('Turma removida com sucesso.');
      emit('close'); // Fecha o popup após a remoção
      window.location.reload(); // Recarrega a página para atualizar a lista de turmas
    } catch (error) {
      console.error('Erro ao remover a turma:', error);
      alert('Ocorreu um erro ao tentar remover a turma.');
    }
  }
};
</script>

<style scoped>
*{
    color: #2e2e2e;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.popup-content h2 {
  margin: 0 0 1rem;
}

.popup-content button {
  margin: 0.5rem 0.25rem; /* Ajuste de espaçamento uniforme */
  padding: 0.5rem 1.5rem; /* Botões mais largos */
  background: #00664f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem; /* Aumentar o tamanho da fonte */
}

.popup-content button:hover {
  background: #004d3a;
}

.popup-content button:last-child {
  background: #d9534f;
}

.popup-content button:last-child:hover {
  background: #c9302c;
}
</style>
