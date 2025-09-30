<script setup lang="ts">
import { saveUserData } from "@/utils/localStorageUtils";
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importa o roteador

const router = useRouter(); // Instância do roteador

const studentNumber = ref("");
const API_URL = import.meta.env.VITE_API_URL.endsWith("/")
  ? import.meta.env.VITE_API_URL
  : `${import.meta.env.VITE_API_URL}/`; // Garante a barra final

const isWaitingForAuthorization = ref(false); // Novo estado para controlar a exibição da mensagem

async function loginByNumber() {
  try {
    const response = await fetch(`${API_URL}auth/login-by-number`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: studentNumber.value }),
      credentials: "include", // Garante o envio e recebimento de cookies

    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login realizado com sucesso:", data);
      // Aqui você pode redirecionar ou armazenar o token, se necessário
      saveUserData(data);
      router.push("/home"); // Redireciona para a página inicial
    } else {
      console.error("Erro ao realizar login:", await response.text());
    }
  } catch (error) {
    console.error("Erro na requisição de login:", error);
  }
}

async function observeStudentNumber() {
  if (!studentNumber.value) return;

  try {
    const response = await fetch(`${API_URL}auth/observe-number/${studentNumber.value}`);
    if (response.ok) {
      const data = await response.json();
      if (data.status === true) {
        console.log("Número associado a um aluno:", studentNumber.value);
        isWaitingForAuthorization.value = false; // Para de aguardar autorização
        await loginByNumber(); // Realiza o login após associação
        return; // Para o polling
      }
    } else {
      console.error("Erro ao observar número do aluno:", await response.text());
    }
  } catch (error) {
    console.error("Erro na requisição de observação do número do aluno:", error);
  }

  // Continua observando após 2 segundos
  setTimeout(observeStudentNumber, 2000);
}

async function fetchStudentNumber() {
  if (studentNumber.value) return; // Não faz a requisição se o número já foi obtido

  try {
    const response = await fetch(`${API_URL}auth/generate`, {
      method: "POST",
    });

    if (response.ok) {
      const data = await response.json();
      studentNumber.value = data.number;
      isWaitingForAuthorization.value = true; // Define que está aguardando autorização
      observeStudentNumber(); // Inicia a observação do número
    } else {
      console.error("Erro ao buscar número do aluno:", await response.text());
    }
  } catch (error) {
    console.error("Erro na requisição do número do aluno:", error);
  }
}
</script>

<template>
  <div class="number-login">
    <h2>Login com Número de Aluno</h2>
    <button v-if="!studentNumber && !isWaitingForAuthorization" @click="fetchStudentNumber">
      Pedir Número
    </button>
    <p v-if="studentNumber">Seu número é: {{ studentNumber }}</p>
    <p v-if="isWaitingForAuthorization">Aguardando autorização do professor...</p>
    <slot name="back-button"></slot>
  </div>
</template>

<style scoped>
.number-login {
  text-align: center;
  margin-top: 2rem;
  padding: 20px;
  background-color: #2a2b30;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.number-login h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff5722; /* Cor destacada */
  margin-bottom: 1rem;
}

.number-login button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #ff5722; /* Cor destacada */
  color: white;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.number-login button:hover {
  background-color: #e64a19;
  transform: scale(1.05); /* Efeito de destaque ao passar o mouse */
}

.number-login p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #d4d1d1;
}
</style>
