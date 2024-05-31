<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    components: {
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle
    },
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        link2: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return {
            title: props.title,
            image: props.image,
            link: props.link,
            link2: props.link2
        };
    }
});
</script>

<template>
    <ion-card id="card" class="w-3/6 text-center rounded-3xl">
        <RouterLink :to="link">
            <img class="w-36" :alt="title" :src="image" />
            <ion-card-header>
                <ion-card-title>{{ title }}</ion-card-title>
            </ion-card-header>
            <RouterLink class="button" :to="link2">
                Prosseguir
            </RouterLink>
        </RouterLink>
    </ion-card>
</template>

<style scoped>

#card {
    display: flex;
    width: 45%;
    margin: 10px auto ;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
}

.button {
    background-color: #249B9B;
    padding: 10px;
    color: white;
    border-radius: 5px;
}
</style>
