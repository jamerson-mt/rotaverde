<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps<{
  options1: string;
  options2: string;
  options3: string;
  options4: string;
  response: string;
}>();

const buttonColors = ref({
  options1: '#abaaa8',
  options2: '#abaaa8',
  options3: '#abaaa8',
  options4: '#abaaa8'
});

function handleResponse(item: string, option: 'options1' | 'options2' | 'options3' | 'options4') {
  if (item === props.response) {
    buttonColors.value[option] = '#65D430'; 
  } else {
    buttonColors.value[option] = 'red';
  }

  setTimeout(() => {
    buttonColors.value[option] = '#abaaa8'; 
  }, 1000);
}
</script>

<template>
  <div id="content">
    <button 
      @click="handleResponse(props.options1, 'options1')" 
      :style="{ backgroundColor: buttonColors.options1 }" 
      id="button" 
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">
      {{ props.options1 }}
    </button>
    <button 
      @click="handleResponse(props.options2, 'options2')" 
      :style="{ backgroundColor: buttonColors.options2 }" 
      id="button" 
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">
      {{ props.options2 }}
    </button>
    <button 
      @click="handleResponse(props.options3, 'options3')" 
      :style="{ backgroundColor: buttonColors.options3 }" 
      id="button" 
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">
      {{ props.options3 }}
    </button>
    <button 
      @click="handleResponse(props.options4, 'options4')" 
      :style="{ backgroundColor: buttonColors.options4 }" 
      id="button" 
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">
      {{ props.options4 }}
    </button>
  </div>
</template>

<style scoped>
#content {
    display: inline-block;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#button {
    height: 3rem;
    width: 10rem;
    margin: 5px;
    font-weight: bold;
    background-color: #abaaa8;
    color: #000;
    font-size: 1.5rem;
}

</style>
