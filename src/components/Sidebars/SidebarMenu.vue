<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <!-- Logo + Nome -->
    <div class="brand">
      <span v-if="!isCollapsed">Unitryn</span>
    </div>

    <hr />

    <!-- Menu de navegação -->
    <nav class="menu">
      <router-link to="/home" class="menu-item" active-class="active">
        <span class="icon">🏠</span>
        <span class="label" v-if="!isCollapsed">Dashboard</span>
      </router-link>
      <router-link to="/users" class="menu-item" active-class="active">
        <span class="icon">👥</span>
        <span class="label" v-if="!isCollapsed">Usuários</span>
      </router-link>
      <!-- Adicione mais aqui -->
    </nav>

    <button class="collapse-btn" @click="toggleSidebar">
      {{ isCollapsed ? '➡️' : '⬅️' }}
    </button>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isCollapsed = ref(false)
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  min-height: 100vh;
  background-color: transparent; /* ← Transparente */
  backdrop-filter: blur(8px); /* Efeito vidro fosco */
  -webkit-backdrop-filter: blur(8px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  border-right: none; /* Remove borda */
}
.sidebar.collapsed {
  width: 70px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.brand img {
  width: 30px;
  height: 30px;
}

.menu {
  flex: 1;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.menu-item {
  display: flex;
  align-items: center;
  padding: 0.6rem;
  text-decoration: none;
  color: #333;
  border-radius: 6px;
  transition: background 0.2s;
}
.menu-item:hover {
  background: rgba(0, 0, 0, 0.05); /* Leve destaque ao passar o mouse */
}
.menu-item.active {
  background: #6a00f4;
  color: white;
}

.icon {
  width: 30px;
  text-align: center;
}

.label {
  white-space: nowrap;
}

.collapse-btn {
  background: transparent;
  border: none;
  color: #666;
  margin-top: auto;
  cursor: pointer;
}
</style>
