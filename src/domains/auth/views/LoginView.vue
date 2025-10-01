<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { saveUserData } from "@/utils/localStorageUtils";
import NumberLogin from "../components/NumberLogin.vue";

const router = useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const isRegistering = ref(false);
const showNumberLogin = ref(false);
const feedbackMessage = ref(""); // Nova variável para armazenar a mensagem de feedback

const API_URL = import.meta.env.VITE_API_URL.endsWith("/")
  ? import.meta.env.VITE_API_URL
  : `${import.meta.env.VITE_API_URL}/`; // Garante a barra final

async function login() {
  try {
    const response = await fetch(`${API_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username.value, password: password.value }),
      credentials: "include", // Garante o envio e recebimento de cookies
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login bem-sucedido:", data);

      // Armazena os dados do usuário no localStorage
      saveUserData(data);

      // Armazena um cookie indicando que o usuário está logado
      document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // Expira em 1 dia

      feedbackMessage.value = "Login realizado com sucesso!";
      router.push("/home");
      window.location.reload();
    } else {
      const errorText = await response.text();
      console.error("Erro ao fazer login:", errorText);
      feedbackMessage.value = `Erro ao fazer login: ${errorText}`;
    }
  } catch (error) {
    console.error("Erro na requisição de login:", error);
    feedbackMessage.value = "Erro na requisição de login. Tente novamente.";
  }
}

async function register() {
  try {
    const response = await fetch(`${API_URL}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
      credentials: "include", // Se precisar enviar cookies
    });

    if (response.ok) {
      console.log("Registro bem-sucedido");
      isRegistering.value = false;
    } else {
      console.error("Erro ao registrar:", await response.text());
    }
  } catch (error) {
    console.error("Erro na requisição de registro:", error);
  }
}
</script>

<template>
  <div class="container">
    <div v-if="!showNumberLogin" class="title">
      <h1>Bem-vindo!</h1>
      <p>{{ isRegistering ? "Crie sua conta" : "Entre na sua conta" }}</p>
    </div>

    <div v-if="!showNumberLogin" class="form">
      <input v-model="username" type="text" placeholder="Usuário" />
      <input v-if="isRegistering" v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button v-if="isRegistering" class="register-button" @click="register">
        Registrar
      </button>
      <button v-else class="login-button" @click="login">Entrar</button>
      <button class="toggle-button" @click="isRegistering = !isRegistering">
        {{ isRegistering ? "Já tem uma conta? Entrar" : "Não tem uma conta? Registrar" }}
      </button>
      <button class="number-login-button" @click="showNumberLogin = true">
        Login com número de aluno
      </button>
      <p v-if="feedbackMessage" class="feedback-message">{{ feedbackMessage }}</p>
    </div>

    <NumberLogin v-else>
      <template #back-button>
        <button @click="showNumberLogin = false">Voltar</button>
      </template>
    </NumberLogin>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background-color: #1e1f24;
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1e1f24, #2a2b30);
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.title h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.title p {
  font-size: 1.2rem;
  font-weight: 400;
  color: #d4d1d1;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #2a2b30;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form input {
  padding: 12px;
  border: 1px solid #444;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #1e1f24;
  color: white;
}

.form input::placeholder {
  color: #888;
}

.login-button,
.register-button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button {
  background-color: blueviolet;
  color: white;
}

.login-button:hover {
  background-color: rebeccapurple;
}

.register-button {
  background-color: #444;
  color: white;
}

.register-button:hover {
  background-color: #555;
}

.toggle-button {
  background-color: transparent;
  color: #888;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: underline;
  margin-top: 10px;
}

.toggle-button:hover {
  color: white;
}

.number-login-button {
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

.number-login-button:hover {
  background-color: #e64a19;
  transform: scale(1.05); /* Efeito de destaque ao passar o mouse */
}

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

.feedback-message {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #ff5722; /* Cor de destaque para a mensagem */
  text-align: center;
}

@media (max-width: 768px) {
  .title h1 {
    font-size: 2rem;
  }

  .title p {
    font-size: 1rem;
  }

  .form {
    padding: 15px;
  }

  .form input {
    font-size: 0.9rem;
  }

  .login-button,
  .register-button {
    font-size: 0.9rem;
  }
}
</style>
