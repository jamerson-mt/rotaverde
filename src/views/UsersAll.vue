<script setup lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { useRouter } from 'vue-router';
import Users from '@/components/cards/Users.vue';
import { defineComponent, ref, onMounted } from 'vue';

const frase = ref('ÁreaDoConhecimento');

const falar = (frase: string) => {
    const audio = new Audio(`/audio/${frase}.mp3`);
    audio.play().catch(error => {
        console.error('Erro ao reproduzir o áudio:', error);
    });
};

const router = useRouter();

const users = ref([]);

const fetchUsers = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5245/api/user/all');
        if (!response.ok) {
            throw new Error('Erro')
        }
        const data = await response.json();
        users.value = data;
    } catch (error) {
        console.error('hii')
    }
}

onMounted(() => {
    fetchUsers()
})

</script>

<template>
    <ion-page>
        <ion-content>
            <div class="img">
                <img src="../../public/img/capas/estudo.jpeg" alt="Capacita Digital">
            </div>
            <div class="back"></div>
            <ion-grid>
                <!-- <div v-for="user in users" :key="user.id" class="card">
                    <Users :title="user.username" image="../../public/img/idoso.png" link="/home" :user="user"
                        atividade="teste" />
                </div> -->
                <div class="card" @click="falar(frase)" >
                    <Users title="Jamerson" image="../../public/img/idoso.png" link="/home" :user="{}"
                        atividade="teste" />
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
    z-index: -1;
}

.title {
    display: flex;
    position: relative;
    top: 20.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.card {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 2px;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.submit {
    display: flex;
    position: relative;
    width: 95%;
    height: 3.5rem;
    top: 22rem;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: blueviolet;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
}

.submit .route,
.login .route {
    color: azure;
    font-weight: bold;
}

.google {
    display: flex;
    position: relative;
    width: 95%;
    height: 3.5rem;
    top: 23rem;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #1E1F24;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
}

.google img {
    position: absolute;
    left: 20px;
    width: 25px;
    height: 25px;
}

.login {
    display: flex;
    position: relative;
    width: 95%;
    height: 3.5rem;
    top: 24rem;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: azure;
    font-weight: bold;
    border-radius: 5px;
    border: solid 2px #1E1F24;
}
</style>