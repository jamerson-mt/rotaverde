<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonContent } from "@ionic/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});

const route = useRoute();

const styleObject = computed(() => ({
  "--background": props.color,
  "--color": "#fff",
}));
</script>

<template>
  <!-- <ion-header class="rounded-b-3xl border-solid border-black" id="container"> -->
    <div class="toolbar">
      <h3 id="title">Seus Estudos</h3>
      <div class="barra-progresso">
        <svg
          width="146"
          height="7"
          viewBox="0 0 146 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="146" height="7" rx="3.5" fill="#DADBDD" />
          <rect width="26" height="7" rx="3.5" fill="#65D530" />
        </svg>
      </div>
      <p class="p">20% concluído</p>
      <div id="image" class="w-16 left-5">
        <img src="/src/img/iconperson.png" alt="pessoa" />
      </div>
    </div>
  <!-- </ion-header> -->
</template>

<style scoped>

.toolbar {
  display: flex;
  position: relative;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 124px;
  width: 100%;
  background-color: #249b9b;
}

#title {
  text-align: center;
  font-size: 24px;
  color: white;
}
.barra-progresso {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #2d2d2d;
}

#image {
  border-radius: 50px;
  background-color: #d9d9d9;
  width: 4rem;
  position: absolute;
}

.p {
  margin-top: 5px;
  font-size: 14px;
}
</style>
