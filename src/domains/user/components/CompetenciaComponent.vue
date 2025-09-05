<template>
  <p class="competencia" @click.stop="togglePopup">{{ text }}</p>
  <div v-if="isPopupVisible" class="popup-overlay" @click="togglePopup">
    <div class="popup" @click.stop>
      <p class="popup-title">Detalhes da Competência</p>
      <p class="popup-content">{{ descricaoCompetencia }}</p>
      <button @click="togglePopup">Fechar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import competencias from "../data/competencias.json";

const props = defineProps({
  text: {
    type: String,
    required: true,
  }
});

const isPopupVisible = ref(false);
const descricaoCompetencia = ref<string | null>(null);

const togglePopup = () => {
  if (!isPopupVisible.value) {
    const competencia = competencias.find(
      c => c.codigo.toLowerCase() === props.text.toLowerCase()
    );
    descricaoCompetencia.value = competencia ? competencia.descricao : "Descrição não encontrada.";
  }
  isPopupVisible.value = !isPopupVisible.value;
};
</script>

<style scoped>
.competencia {
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 15px;
  color: #0f3d3e;
  background-color: #ecc055;
  text-align: center;
  border-radius: 5px;
  padding: 5px 5px;
  white-space: nowrap;
  cursor: pointer;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 60%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
  color: #0f3d3e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.popup-content {
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
}

.popup button {
  padding: 5px 10px;
  background-color: #ecc055;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
