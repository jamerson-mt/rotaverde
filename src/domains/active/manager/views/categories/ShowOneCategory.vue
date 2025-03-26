<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
interface Category {
    name: string;
    status: string;
    description: string;
}

const category = ref<Category>({
    name: '',
    status: '',
    description: '',
});
const showModal = ref(false);

onMounted(async () => {
    const categoryId = route.params.id; // Obtém o ID da categoria da rota
    try {
        const response = await fetch(`https://idipibex.online/api/categories/${categoryId}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Erro ao buscar categoria');
        }
        category.value = await response.json();
    } catch (error) {
        console.error(error);
    }
});

const emitShowModal = () => {
    showModal.value = true;
};

</script>

<template>
    <ion-page class="page">
        <ion-content>
            <div class="areas">
                <div class="title">
                    <span>{{ category.name }}</span>
                    <button v-on:click.prevent="emitShowModal"
                        class="btn btn-sm btn-info mr-1">Editar</button>
                </div>
                <p><strong>Status: </strong>{{ category.status }}</p>
                <p><strong>Descrição: </strong>{{ category.description }}</p>

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