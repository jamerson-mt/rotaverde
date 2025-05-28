<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/vue";

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },
  props: 
  { 
    title: { type: String, required: true },
    image: { type: String, required: true },
    link:  { type: String, required: true },
    link2: { type: String, required: true },
    bgc:   { type: String, required: true },

  },
  setup(props) {
    const handleClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.add("clicked");
      setTimeout(() => target.classList.remove("clicked"), 200);

      const confettiContainer = target.querySelector(".confetti-container") as HTMLElement;
      if (confettiContainer) {
        confettiContainer.classList.add("active");
        const confettiElements = confettiContainer.querySelectorAll(".confetti");
        confettiElements.forEach((confetti) => {
          const randomX = Math.random() * 100 - 50; 
          const randomY = Math.random() * 100 + 50;
          const randomRotation = Math.random() * 360; 
          (confetti as HTMLElement).style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        });
        setTimeout(() => confettiContainer.classList.remove("active"), 1000);
      }
    };

    return { title: props.title, image: props.image, link: props.link, link2: props.link2, bgc: props.bgc, handleClick};
  },
});
</script>

<template>
  <div class="container" :style="{ backgroundColor: bgc }" @click="handleClick">
    <div class="confetti-container">
      <span v-for="n in 20" :key="n" class="confetti"></span>
    </div>
    <div class="button" :to="link2">
      <img class="nuvem" src="/public/img/IconsHome/nuvem.png" alt="">
      <div class="content">
        <img src="/public/img/iconesSustentabilidade/arvore.png" alt="">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.container {
  display: flex;
  width: 155px;
  height: 155px;
  margin: 15px auto;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 4px;
  flex-wrap: wrap;
  border-radius: 10px;
  animation: pulse 2s infinite;
  background-size: cover;       
  background-position: center;   
  background-repeat: no-repeat; 
}

.nuvem {
  position: relative;
  top: -5px;
  left: 35px;
  width: 60px;
  height: auto;
  z-index: 0;
}

#figura {
  position: relative;
  top: -15px;
  left: 5px;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.content img {
  width: 50px;
}
.button{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.content p {
  position: relative;
  /* top: 3rem;  */
  color: #1E1E1E;
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  padding: 0px;
  line-height: 20px;
  font-style: normal;
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
}

.clicked {
  opacity: 0.8;
  border: 2px solid #007bff;
  transition: opacity 0.2s ease, border 0.2s ease;
}

.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.confetti-container.active .confetti {
  animation: fall 1s ease-out forwards, spin 1s linear infinite;
}

.confetti {
  position: absolute;
  width: 6px;
  height: 12px;
  background-color: #ffcc00;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.confetti-container.active .confetti {
  opacity: 1;
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(150px) translateX(0);
    opacity: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
