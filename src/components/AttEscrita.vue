<script setup lang="ts">
import Options from "@/components/Options.vue";

const props = defineProps({
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
    }
});

</script>

<template>
        <div class="flex flex-col items-center justify-center">
            <h1 id="title">{{ title }}</h1>
            <img  class="w-48" :src="image">
            <div class="w-full">
                <Options options1="Girafa" options2="Girrafa" options3="Girraffa" options4="Girrafa" />
            </div>
            <RouterLink :to="link" id="router" class="text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center mt-10">Próximo</RouterLink>
        </div>
</template>

<style scoped>
    #title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem;
    }

    #router {
        background-color: #6D4D2F;
        font-size: 1.5rem;
    }

</style>