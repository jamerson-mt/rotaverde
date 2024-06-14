<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonContent } from "@ionic/vue";
</script>

<template>
  <div class="container">
    <div class="div">
      <p>Nome</p>
      <input class="campo" placeholder="João Carlos"></input>
    </div>
    <div class="div">
      <p>Data Nascimento</p>
      <input class="campo" placeholder="01/01/1980"></input>
    </div>
    <div class="div">
      <p>E-mail</p>
      <input class="campo" placeholder="Jcarlos@gmail.com"></input>
    </div>
    <button disabled="disabled">Editar</button>
  </div>
  
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");


.container {
  display: flex;
  top: 60px;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.div {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
}

p{
    font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 18px;
  margin-left: 20px;
  text-transform: capitalize;
    width: 80%;
}

.campo,button {
    
    padding: 15px;
  height: 45px;
  width: 80%;
  background-color: #F6F6F6;
  border: 1px solid #E8E8E8;
  border-radius: 8px;

}

input::placeholder {
            /* Estilos para o placeholder */
            color: #BDBDBD; /* Cor do texto */
            font-size: 16px; /* Tamanho da fonte */
        }

button{
    background-color: #FFB636;
    color: white;
    font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 18px;
border-radius: 10px;
  text-transform: capitalize;

}
</style>
