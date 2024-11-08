<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import EditCategoryModal from '../../components/EditCategoryModal.vue';

const route = useRoute();
const module = ref({});
const showModal = ref(false);

onMounted(async () => {
    const moduleId = route.params.id; 
    try {
        const response = await fetch(`https://idipibex.online/api/modules/${moduleId}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Erro ao buscar modulo');
        }
        module.value = await response.json();
    } catch (error) {
        console.error(error);
    }
});

const emitShowModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

</script>

<template>
    <ion-page class="page">
        <ion-content>
            <div class="areas">
                <div class="title">
                    <span>{{ module.title }}</span>
                    <button v-on:click.prevent="emitShowModal"
                        class="btn btn-sm btn-info mr-1">Editar</button>
                </div>
                <p><strong>Status: </strong>{{ module.status }}</p>
                <p><strong>Nível: </strong>{{ module.nivel }}</p>
                <p><strong>Descrição: </strong>{{ module.description }}</p>

                <!-- <EditCategoryModal
                    :isOpen="showModal"
                    :category="category"
                    @close="closeModal"
                /> -->
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    /* Removed the  
 global background setting */
    font-family: "Poppins", sans-serif;
}

.areas {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: #FFF;
    padding: 1rem;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

span {
    font-weight: bold;
    font-size: 20px;
    color: #212523;
}

p {
    font-size: 16;
    color: #212523
}
</style>