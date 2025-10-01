<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <h2>{{ turma.nome }}</h2>
      <p><strong>ID:</strong> {{ turma.id }}</p>
      <p><strong>Descrição:</strong> {{ turma.descricao || 'Sem descrição' }}</p>
      <p><strong>Quantidade de Alunos:</strong> {{ alunosCount }}</p>
      <div v-if="!showActions">
        <button id="btn-show-more" @click="toggleActions">Mostrar Mais</button>
      </div>
      <div v-else>
        <button id="btn-close" @click="closePopup">Fechar</button>
        <button id="btn-config" @click="goToConfig">Configurações</button>
        <button id="btn-remove" @click="removeTurma">Remover Turma</button>
        <button id="btn-access" @click="openTurmaActions">Acessar Turma</button>
        <button id="btn-show-less" @click="toggleActions">Mostrar Menos</button>
      </div>
    </div>
  </div>
  <TurmaActionsPopup
    v-if="showTurmaActionsPopup"
    :turma="turma"
    @close="showTurmaActionsPopup = false"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import TurmaActionsPopup from './TurmaActionsPopup.vue';

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
const showActions = ref(false);
const showTurmaActionsPopup = ref(false);

const toggleActions = () => {
  showActions.value = !showActions.value;
};

const closePopup = () => {
  emit('close');
};

const goToConfig = () => {
  window.location.href = `/professor/turmas/${props.turma.id}`;
};

const API_URL = import.meta.env.VITE_API_URL;
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

const openTurmaActions = () => {
  showTurmaActionsPopup.value = true;
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
  background: #f5f5f5; /* Cor de fundo neutra */
  color: #333; /* Cor do texto */
  border: 1px solid #ccc; /* Borda sutil */
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem; /* Aumentar o tamanho da fonte */
}

.popup-content button:hover {
  background: #e0e0e0; /* Fundo levemente mais escuro ao passar o mouse */
}

.popup-content button:last-child {
  background: #f5f5f5; /* Cor neutra */
  color: #333; /* Cor do texto padrão */
  border: 1px solid #ccc; /* Borda neutra */
}

.popup-content button:last-child:hover {
  background: #e0e0e0; /* Fundo levemente mais escuro ao passar o mouse */
}

.popup-content button:nth-last-child(2) {
  background: #f5f5f5; /* Mesma cor neutra */
  color: #d9534f; /* Destaque na cor do texto */
  border: 1px solid #d9534f; /* Borda correspondente */
}

.popup-content button:nth-last-child(2):hover {
  background: #fbeaea; /* Fundo levemente avermelhado ao passar o mouse */
}

/* Estilos específicos para cada botão */
#btn-show-more {
  background: #007bff;
  color: white;
}

#btn-show-more:hover {
  background: #0056b3;
}

#btn-close {
  background: #6c757d;
  color: white;
}

#btn-close:hover {
  background: #5a6268;
}

#btn-config {
  background: #28a745;
  color: white;
}

#btn-config:hover {
  background: #218838;
}

#btn-remove {
  background: #f5f5f5;
  color: #d9534f;
  border: 1px solid #d9534f;
}

#btn-remove:hover {
  background: #fbeaea;
}

#btn-access {
  background: #ffc107;
  color: #212529;
}

#btn-access:hover {
  background: #e0a800;
}

#btn-show-less {
  background: #007bff;
  color: white;
}

#btn-show-less:hover {
  background: #0056b3;
}
</style>
