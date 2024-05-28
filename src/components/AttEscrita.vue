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
    options: {
        type: Object,
        required: true
    }
});

</script>

<template>
        <div class="flex flex-col items-center justify-center">
            <h1 id="title">{{ title }}</h1>
            <img  class="w-48" :src="image">
            <div class="w-full">
                <Options 
                    :options1="options.option1" 
                    :options2="options.option2" 
                    :options3="options.option3" 
                    :options4="options.option4" 
                    :response="options.response"
                />
            </div>
        </div>
</template>

<style scoped>
#title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
}

</style>