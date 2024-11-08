<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    urlVideo: string;
}>();
</script>

<template>
    <div class="youtube-video">
        <iframe
            width="560"
            height="315"
            :src="props.urlVideo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
</template>
