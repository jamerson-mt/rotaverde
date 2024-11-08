<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

// const props = defineProps({
//     level: {
//         type: number,
//         required: false
//     }
// });

// const level = ref(0);

</script>

<template>
    <ion-header>
        <ion-toolbar id="toobar" color="#249B9B">
            <div>
                <ion-title id="title">Jogo da Memória</ion-title>
                <content class="ml-5">Decore a sequência das cores</content>
            </div>
            <div id="level">
                <p>0/10 Nível</p>
            </div>
        </ion-toolbar>
    </ion-header>
</template>

<style scoped>
#toobar {
    display: flex;
    height: 5rem;
    display: flex;
    justify-content: space-between;
}

#title {
    width: 70%;
    font-size: 1.5rem;
    font-weight: bold;
}

#level {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    width: 24%;
    border: solid rgb(153, 153, 153) 2px;
    border-radius: 10px;
    text-align: center;
    padding: 2px;
    font-size: 12px;
}
</style>