<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });

</script>

<template>
    <ion-button href="/loading" expand="block" class="w-64 font-sans h-12">Iniciar aprendizado</ion-button>
</template>