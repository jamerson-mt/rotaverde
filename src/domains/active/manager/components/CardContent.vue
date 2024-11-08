<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        NextPage() {
            window.location.href = `manager/contents/edit/${this.id}`;

        }
    }
});
</script>
<template>
    <div class="container">
        <div class="foto">
            <a @click="NextPage" class="activity-link">
                <img src="img/abc.png" alt="">
            </a>
        </div>
        <div class="texto">
            <p> {{ title }}
            </p>
        </div>

    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
}

.foto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>