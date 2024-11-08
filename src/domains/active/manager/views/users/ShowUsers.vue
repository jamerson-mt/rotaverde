<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface User {
    id: number;
    username: string;
}

export default defineComponent({
    setup() {
        const users = ref<User[]>([]);
        const selectedUser = ref(null);

        const fetchUsers = async () => {
            try {
                const response = await fetch('https://idipibex.online/api/user/all');
                if (!response.ok) {
                    throw new Error('Erro');
                }
                const data = await response.json();
                users.value = data;
                console.log(users.value);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        const deleteUser = (id: any) => {
            fetch(`https://idipibex.online/api/user/${id}`, { method: 'DELETE' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir usuário');
                    }
                    return response;
                })
                .then(() => {
                    fetchUsers();
                })
                .catch(error => {
                    console.error('Erro:', error);
                });
        };

        onMounted(() => {
            fetchUsers();
        });

        return {
            users,
            selectedUser,
            fetchUsers,
            deleteUser,
        };
    }
});
</script>

<template>
    <div>
        <h1>Usuários</h1>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>
                        <button @click="deleteUser(user.id)">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<style scoped>
* {
    color: #000;
}

table {
    width: 100%;
    border-collapse: collapse;

}

th, td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
}
</style>
