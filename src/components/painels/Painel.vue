<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    valor: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      valor: props.valor,
    };
  },
});
</script>

<template>
  <div class="container" >
    <p :class="valor">{{ valor }}</p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  position: relative;
  height: 100px;
  padding: 30px;
  background-color: #efefef;
  border: 1px solid #343030;
 
}
p {
  text-align: center;
  color: #4d4d4d;
  font-size: 24px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-style: bold;
}
</style>
