<script lang="ts" setup>
import { IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonButton } from '@ionic/vue';
import { ref, watch } from 'vue';


const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  modalMessage: {
    type: String,
  },

});

const emit = defineEmits(['close']);

const modalRef = ref();

function closeModal() {
  emit('close');
}
</script>

<template>
  <ion-modal ref="modalRef" :is-open="isOpen" @didDismiss="closeModal">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ modalMessage }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">X</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    </ion-content>
  </ion-modal>
</template>

<style>
  .block {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-modal {
    --height: auto;
  }

  ion-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
</style>
