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
        content: {
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
        }
    },
    setup(props) {
        return {
            title: props.title,
            content: props.content,
            image: props.image,
            link: props.link
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

            <ion-card-content>
                {{ content }}
            </ion-card-content>
        </RouterLink>
    </ion-card>
</template>

<style scoped>
#card {
    margin: 0 auto;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
