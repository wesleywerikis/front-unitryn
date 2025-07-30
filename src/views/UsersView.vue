<template>
  <div>
    <h2>Users (Protected)</h2>
    <button @click="logoutAndRedirect">Logout</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import api from '../services/api';
import { onMounted, ref } from 'vue';
import { logout } from '../auth';
import { useRouter } from 'vue-router';

const users = ref([]);
const router = useRouter();

onMounted(async () => {
  try {
    const res = await api.get('/api/users');
    users.value = res.data;
  } catch (e) {
    logout();
    router.push('/login');
  }
});

function logoutAndRedirect() {
  logout();
  router.push('/login');
}
</script>
