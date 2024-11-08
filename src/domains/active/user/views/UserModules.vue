<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import HeaderLevels from 'portuguese/components/HeaderLevels.vue';
import NavBotton from 'portuguese/components/NavBotton.vue';
import { onMounted, ref } from 'vue'
import CardModules from 'user/components/CardModules.vue';
const frase = ref('SelecionarAtividade');



interface Module {
    id: number;
    title: string;
    description: string;
    nivel: string;
    status: string;
}

const modules = ref<Module[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('https://idipibex.online/api/modules', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Erro ao buscar modulos');
        }
        const data = await response.json();
        modules.value = data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div>
                <HeaderLevels :frase="frase" />
            </div>
            <div class="container">
                <CardModules v-for="module in modules" :key="module.id" :id="module.id" :title="module.title"
                    :description="module.description" :nivel="module.nivel" :status="module.status" />
            </div>
        </ion-content>
        <NavBotton />
    </ion-page>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 30px;
    align-items: center;
}

.NavBotton {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>