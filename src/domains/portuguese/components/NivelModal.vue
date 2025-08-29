<script setup lang="ts">
import { IonModal, IonContent, IonButton } from '@ionic/vue';
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean
});
const emit = defineEmits(['close', 'nivelSelecionado']);

function closeModal() {
  emit('close');
}
function selectNivel(nivel: number) {
  emit('nivelSelecionado', nivel);
  closeModal();
}
</script>

<template>
  <ion-modal :is-open="isOpen" @didDismiss="closeModal">
    <ion-content class="ion-padding nivel-modal-content">
      <div class="modal-container">
        <h2 class="modal-title">Escolha o nível da atividade</h2>
        <div class="nivel-buttons">
          <ion-button class="nivel-btn facil" @click="selectNivel(1)" expand="block">Fácil</ion-button>
          <ion-button class="nivel-btn moderado" @click="selectNivel(2)" expand="block">Moderado</ion-button>
          <ion-button class="nivel-btn dificil" @click="selectNivel(3)" expand="block">Difícil</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-modal>
</template>

<style scoped>
.nivel-modal-content {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  flex-direction: column;
  position: relative;
}
.modal-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 90vw;
}
.modal-container {
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 90vw;
}
.modal-title {
  font-size: 2rem;
  font-weight: bold;
  color: #4b3f2f;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 1px;
}
.nivel-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
}
.nivel-btn {
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 2rem;
  box-shadow: 0 2px 8px rgba(109, 77, 47, 0.08);
  transition: transform 0.1s, box-shadow 0.1s;
}
.nivel-btn:active {
  transform: scale(0.97);
  box-shadow: 0 1px 4px rgba(109, 77, 47, 0.12);
}
.facil {
  --background: #a7f3d0;
  --color: #065f46;
}
.moderado {
  --background: #fef08a;
  --color: #92400e;
}
.dificil {
  --background: #fecaca;
  --color: #991b1b;
}
</style>
