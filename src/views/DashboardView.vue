<!-- src/views/DashboardView.vue -->
<template>
  <div class="dashboard-container">
    <h2>Bem-vindo ao sistema!</h2>
    <p>Você está logado com sucesso.</p>

    <div class="menu">
      <router-link class="menu-item" to="/users">👥 Usuários</router-link>
      <router-link class="menu-item" to="/config">⚙️ Configurações</router-link>
      <router-link class="menu-item" to="/relatorios">📊 Relatórios</router-link>
      <button class="menu-item logout" @click="logoutAndRedirect">🚪 Sair</button>
    </div>
  </div>
</template>

<script setup>
import { logout } from '../auth';
import { useRouter } from 'vue-router';

const router = useRouter();
function logoutAndRedirect() {
  logout();
  router.push('/login');
}
</script>

<style scoped>
.dashboard-container {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

.menu {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.menu-item {
  padding: 0.8rem;
  border-radius: 10px;
  background: #f1f1f1;
  text-decoration: none;
  color: #333;
  transition: 0.2s ease;
}

.menu-item:hover {
  background: #6a00f4;
  color: white;
}

.logout {
  background: #f44336 !important;
  color: white !important;
  border: none;
}
</style>
