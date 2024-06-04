<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
    color: {
        type: String,
        required: true 
    }
});

const route = useRoute();

const styleObject = computed(() => ({
  '--background': props.color,
  '--color': '#fff'  
}));


</script>

<template>
    <ion-header class="rounded-b-3xl border-solid border-black">
        <ion-toolbar :style="styleObject" id="toolbar" class="h-28 rounded-b-3xl flex">
          <ion-title id="title" class="w-2/4 flex">Seus Estudos</ion-title>
          <div id="bar1"></div>
          <div id="bar2"></div>
          <div id="p">
            <p>60% concluído</p>
          </div>
          <div id="image" class="w-16 right-0">
            <img class="rounded-2xl" src="../../../public/img/idoso.png" alt="Motagem01"  >
          </div>
        </ion-toolbar>
    </ion-header>
</template>

<style scoped>
#title {
  margin-left: -5px;
  font-size: 20px;
}

#image {
  width: 5rem;
  position: absolute;
  right: 20px;
  top: 20px;
}

#bar1 {
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  width: 15rem;
  height: 5px;
  background-color: #c1bebe;
  border-radius: 20px;
}

#bar2 {
  position: relative;
  margin-left: 10px;
  top: -5px;
  width: 9rem;
  height: 5px;
  background-color: #616a6a;
  border-radius: 20px;
}

#p {
  position: relative;
  margin-top: 5px;
  margin-left: 15px;
}
</style>
