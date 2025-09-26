<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

async function login() {
  try {
    const response = await fetch("http://127.0.0.1:5245/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login bem-sucedido:", data);
      router.push("/home");
    } else {
      console.error("Erro ao fazer login:", await response.text());
    }
  } catch (error) {
    console.error("Erro na requisição de login:", error);
  }
}

async function register() {
  try {
    const response = await fetch("http://127.0.0.1:5245/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (response.ok) {
      console.log("Registro bem-sucedido");
      login(); // Faz login automaticamente após o registro
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
    <div class="title">
    <h1>Bem-vindo!</h1>
    <p>Entre na sua conta ou registre-se</p>
  </div>

  <div class="form">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button class="login-button" @click="login">Entrar</button>
    <button class="register-button" @click="register">Registrar</button>
  </div></div>
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
