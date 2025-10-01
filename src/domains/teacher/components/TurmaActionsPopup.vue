<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <h2>Ações da Turma: {{ props.turma.nome }}</h2>
      <div v-if="loading">Carregando números...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <h3>Números Gerados:</h3>
        <div class="numero-grid">
          <div
            v-for="(numero, index) in numeros"
            :key="index"
            class="numero-quadrado"
            @click="abrirSelecaoAluno(numero)"
          >
            {{ numero.number }}
          </div>
        </div>
        <button @click="fetchNumeros">Atualizar Números</button>
      </div>
      <button @click="closePopup">Fechar</button>
    </div>

    <div v-if="alunoModalVisivel" class="modal-overlay" @click.self="fecharSelecaoAluno">
      <div class="modal-content">
        <h3>Selecione um Aluno para o Número {{ numeroSelecionado?.number }}</h3>
        <ul class="aluno-lista">
          <li
            v-for="(aluno, index) in alunos"
            :key="index"
            class="aluno-item"
            @click="selecionarAluno({ id: aluno.id, nome: aluno.userName })"
          >
            {{ aluno.userName }}
          </li>
        </ul>
        <button @click="fecharSelecaoAluno">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from "vue";

const props = defineProps({
  turma: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const numeros = ref<{ number: number }[]>([]);
const alunos = ref<{ id: number; userName: string }[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const alunoModalVisivel = ref(false);
const numeroSelecionado = ref<{ number: number } | null>(null);

const closePopup = () => {
  emit("close");
};

const API_URL = import.meta.env.VITE_API_URL;

const fetchNumeros = async () => {
  try {
    const response = await fetch(`${API_URL}auth/generated`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Erro na resposta da API");
    }
    const data = await response.json();
    numeros.value = data.filter((numero: { assignedTo: any }) => !numero.assignedTo);
  } catch (err) {
    error.value = "Erro ao carregar os números.";
  } finally {
    loading.value = false;
  }
};

const fetchAlunos = async () => {
  try {
    const response = await fetch(`${API_URL}user`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar alunos.");
    }
    const data = await response.json();
    alunos.value = data;
  } catch (err) {
    error.value = "Erro ao carregar os alunos.";
  }
};

const abrirSelecaoAluno = (numero: { number: number }) => {
  numeroSelecionado.value = numero;
  alunoModalVisivel.value = true;
};

const fecharSelecaoAluno = () => {
  alunoModalVisivel.value = false;
  numeroSelecionado.value = null;
};

const selecionarAluno = async (aluno: { id: number; nome: string }) => {
  try {
    const response = await fetch(`${API_URL}auth/assign-number`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userName: aluno.nome,
        number: numeroSelecionado.value?.number,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao associar o número ao aluno.");
    }

    console.log(`Número ${numeroSelecionado.value?.number} associado ao aluno ${aluno.nome}.`);
    await fetchNumeros(); // Atualiza a lista de números após a associação
  } catch (err) {
    console.error("Erro ao associar o aluno:", err);
  } finally {
    fecharSelecaoAluno();
  }
};

onMounted(async () => {
  await fetchNumeros();
  await fetchAlunos();
});
</script>

<style scoped>
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
  margin: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: #00664f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.popup-content button:hover {
  background: #004d3a;
}

.numero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.5rem;
  margin: 1rem 0;
}

.numero-quadrado {
  background: #e0f7fa;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #00796b;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

.numero-quadrado:hover {
  background: #b2dfdb;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

.modal-content h3 {
  margin-bottom: 1rem;
}

.aluno-lista {
  list-style: none;
  padding: 0;
  margin: 0;
}

.aluno-item {
  background: #f0f0f0;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
}

.aluno-item:hover {
  background: #d0d0d0;
}
</style>
