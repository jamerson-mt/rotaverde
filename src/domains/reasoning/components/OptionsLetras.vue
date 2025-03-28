<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue';

const props = defineProps<{
  options1: string;
  options2: string;
  options3: string;
  response: string;
}>();

const buttonColors = ref({
  options1: '#abaaa8',
  options2: '#abaaa8',
  options3: '#abaaa8',
});

const emit = defineEmits(['submit']);

function response(value: boolean) {
    emit('submit', value);
}

function handleResponse(item: string, option: 'options1' | 'options2' | 'options3') {
  if (item === props.response) {
    buttonColors.value[option] = '#65D430';
    let value = true;
    setTimeout(() => {
      response(value);
    }, 100);
    

  } else {
    buttonColors.value[option] = 'red';
    let value = false;
    
    setTimeout(() => {
      response(value);
    }, 100);
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
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 text-center m-2">
      {{ props.options1 }}
    </button>
    <button 
      @click="handleResponse(props.options2, 'options2')" 
      :style="{ backgroundColor: buttonColors.options2 }" 
      id="button" 
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 text-center m-2">
      {{ props.options2 }}
    </button>
    <button 
      @click="handleResponse(props.options3, 'options3')" 
      :style="{ backgroundColor: buttonColors.options3 }" 
      id="button" 
      class="hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 text-center m-2">
      {{ props.options3 }}
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
    width: 100%;
}

#button {
    height: 3rem;
    width: 6.5rem;
    margin: 5px;
    font-weight: bold;
    background-color: #abaaa8;
    color: #000;
    font-size: 1.5rem;
}

</style>
