<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        link: {
            type: String,
            required: true
        }
    }
});
</script>

<template>
    <div id="button">
      <RouterLink id="link" :to="link" class="">Iniciar aprendizado</RouterLink>
    </div>
</template>

<style scoped>
#link {
    color: aliceblue;
    font-size: 15px;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    display: inline-block;
    height: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

#button {
  width: 75%;
  height: 3rem;
  display: flex;
  background-color: #2b25dd;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
</style>