<script setup lang="ts">

const props = defineProps({
  img: {
    type: String,
    required: true,
  }
});

</script>

<template>
    <div class="card">
        <div class="content">
            <img class="image" :src="img">
        </div>
    </div>
</template>

<style scoped>

.content {
    position: relative;
    top: 3.5rem;
    background-color: #E9E8E8;
    width: 8rem;
    height: 4rem;
    border-radius: 10px;
    border: solid #C4C4C4 4px;
}

.image {
    width: 6rem;
    left: 0.5rem;
    position: relative;
    top: -4rem;
    align-items: center;
    justify-content: center;
}
</style>