<script lang="ts" setup>
import { IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonButton } from '@ionic/vue';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  modalMessage: {
    type: String,
  },
  correct: {
    type: Boolean,
  }
});

const emit = defineEmits(['close', 'nextAtt']);

const modalRef = ref();
let cont = ref();
let timer = ref<number>(0); 
let x = ref<number>(15); 
let interval: NodeJS.Timeout | null = null;

function timerCont() {
  if (x.value > 0) {
    x.value -= 1;
  } else {
    clearInterval(interval!);
  }
}

function startTimer(): void {
  if (interval) clearInterval(interval); 

  timer.value = 0; 
  x.value = 15; 

  interval = setInterval(() => {
    timer.value += 1; 
    timerCont(); 
  }, 1000);
}

function closeModal() {
  emit('close');
}

function nextAtt() {
  emit('nextAtt');
}

onMounted(() => {
  startTimer();
});

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    startTimer();
  } else {
    clearInterval(interval!);
  }
});
</script>

<template>
  <ion-modal ref="modalRef" :is-open="isOpen" @didDismiss="closeModal">
    <ion-content class="ion-padding">
      <!-- <div id="toolbar">
        <ion-button id="x" @click="closeModal">X</ion-button>
      </div> -->
      <div class="container">
        <svg class="timer" viewBox="0 0 36 36">
          <path
            class="circle-bg"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class="circle"
            :stroke-dasharray="`${(timer / 15) * 100}, 100`" 
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            style="transition: stroke-dasharray 1s linear;"
          />
          <text id="cont" x="18" y="20.35" class="percentage">
            {{ cont }}
          </text>
        </svg>
        <ion-title id="cont">{{ x }}</ion-title>
      </div>
      <div v-if="correct == false" class="options">
        <ion-button @click="closeModal">Sim</ion-button>
        <ion-button @click="nextAtt">Não</ion-button>
      </div>
      <div v-if="correct == true" class="options">
        <ion-button @click="nextAtt">Sim</ion-button>
        <ion-button @click="closeModal">Não</ion-button>
      </div>
      <ion-title>{{ modalMessage }}</ion-title>
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

  .ion-padding {
    display: flex;
  }

  #x {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #cont {
    position: absolute;
    top: -1rem;
    font-size: 1.5rem;
  }

  .container {
    position: relative;
    top: -4rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  text {
    font-size: 0.5rem;
    fill: rgb(13, 13, 13); 
    font-weight: bold;
  }

  .options {
    position: relative;
    top: -4rem;
    display: flex;
    justify-content: space-between;
    margin-top: 0;
  }
  
  .options ion-button {
    width: 40%;
    height: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }

  ion-modal {
    --height: 35%;
  }

  ion-title {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .timer-container {
        position: absolute;
        top: 20px;
        left: 20px; 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .timer {
        width: 100px; 
        height: 100px; 
    }

    .circle-bg {
        fill: none;
        stroke: #eee;
        stroke-width: 3.8;
    }

    .circle {
        fill: none;
        stroke: #ffdd00;
        stroke-width: 2.8;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards; 
    }

    .percentage {
        fill: white;
        font-size: 1.2rem; /* Aumentado para melhor visibilidade */
        text-anchor: middle;
        dominant-baseline: middle; /* Centraliza verticalmente */
        font-weight: bold;
    }

    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }
</style>
