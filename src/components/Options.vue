<script setup lang="ts">

const props = defineProps({
    options1: {
        type: String,
        required: true
    },
    options2: {
        type: String,
        required: true
    },
    options3: {
        type: String,
        required: true
    },
    options4: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div id="content">
        <button id="button" class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">{{ props.options1 }}</button>
        <button id="button" class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">{{ props.options2 }}</button>
        <button id="button" class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">{{ props.options3 }}</button>
        <button id="button" class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-5 w-3/5 text-center m-2">{{ props.options4 }}</button>
    </div>
</template>

<style scoped>
#content {
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
}

#button {
    height: 3rem;
    width: 10rem;
    margin: 5px;
    font-weight: bold;
    background-color: #abaaa8;
    color: #000;
    font-size: 1.5rem;
}
</style>


