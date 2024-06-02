<script lang="ts">
import { IonProgressBar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { IonProgressBar },
    setup() {
    let progress = ref(0);

    return {
        progress,
    };
    },
    mounted() {
    setInterval(() => {
        this.progress += 0.01;

        if (this.progress > 1) {
        setTimeout(() => {
            this.progress = 0;
        }, 1500);
        }
    }, 70);
    },
});
</script>

<template>
    <ion-progress-bar id="bar" :value="progress"></ion-progress-bar>
</template>

<style scoped>
#bar {
    width: 20rem;
    height: 30px;
    background-color: #c1bebe;
    border-radius: 20px;
}

ion-progress-bar {
    --background: #c1bebe;
    --progress-background: #4de024;
  }
</style>