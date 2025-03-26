<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    category: Object,
});
// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits();

const closeModal = () => {
    emit('close');
};

const saveChanges = async () => {
    try {
        if (!props.category) {
            throw new Error('Categoria não definida');
        }
        const response = await fetch(`http://localhost:8080/api/categories/${props.category.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(localCategory.value),
        });
        if (!response.ok) {
            throw new Error('Erro ao salvar as mudanças');
        }
        closeModal();
    } catch (error) {
        console.error(error);
    }
};

const localCategory = ref({ ...props.category });

watch(() => props.category, (newValue) => {
    localCategory.value = { ...newValue };
});
</script>

<template>
    <ion-modal :is-open="isOpen" @did-dismiss="closeModal">
        <ion-header>
            <ion-toolbar>
                <ion-title>Editar Categoria</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="closeModal">Fechar</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item>
                <ion-label position="floating">Nome</ion-label>
                <ion-input v-model="localCategory.name"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Status</ion-label>
                <ion-input v-model="localCategory.status"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Descrição</ion-label>
                <ion-input v-model="localCategory.description"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="saveChanges">Salvar</ion-button>
        </ion-content>
    </ion-modal>
</template>


<style scoped>
/* Seus estilos aqui */
</style>
