<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    link2: {
      type: String,
      required: true,
    },
    bgc: {
      type: String,
      required: true,
    },

  },
  setup(props) {
    return {
      title: props.title,
      image: props.image,
      link: props.link,
      link2: props.link2,
      bgc: props.bgc
    };
  },
});
</script>

<template>
  <div class="container" :style="{ backgroundColor: bgc }">
    <div class="button" :to="link2">
      <div>
        <p>{{ title }}</p>
        <p></p>
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
  width: 145px;
  height: 155px;
  margin: 15px auto;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 4px;
  flex-wrap: wrap;
  border-radius: 10px;
  animation: pulse 2s infinite;
  background-image: url('public/img/fundo1.jpg');
  background-size: cover;
  background-position: center;
}

#figura {
  position: relative;
  top: -15px;
  left: 5px;
}

p {
  position: relative;
  top: 90px;
  color: #2e2e2e;
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  padding: 0px;
  line-height: 20px;
  font-style: normal;
  font-size: 16px;
  margin-left: 10px;
  text-transform: capitalize;
}
</style>
