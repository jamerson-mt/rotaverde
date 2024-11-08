<template>
    <div class="container" @click="goToCreateCategory">
        <div>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M44 20H36V36H20V44H36V60H44V44H60V36H44V20ZM40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM40 72C22.36 72 8 57.64 8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72Z"
                    fill="white" />
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCreateCategory = () => {
    router.push('/categoria/create');
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

.container {
    display: flex;
    width: 145px;
    background-color: #3b3939;
    height: 155px;
    margin: 15px auto;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    padding: 4px;
    flex-wrap: wrap;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
}
</style>