<!-- src/layouts/DefaultLayout.vue -->
<template>
    <div class="layout">
        <HeaderMain />
        <div class="content-wrapper">
            <SidebarMenu />
            <main class="main-content">
                <slot /> <!-- Aqui será injetado o conteúdo da view -->
            </main>
        </div>
        <!--<FooterDefault />-->
    </div>
</template>

<script setup>
import HeaderMain from '../components/Headers/HeaderMain.vue'
import SidebarMenu from '../components/Sidebars/SidebarMenu.vue'

</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content-wrapper {
    display: flex;
    flex: 1;
}

.main-content {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}
</style>