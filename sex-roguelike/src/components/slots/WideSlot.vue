<script setup>
// Mostrar Sidebar
import { ShowSidebar } from '@/services/SidebarVisibility.js'
ShowSidebar();
</script>

<template>
    <div class="wide-slot">
        <div class="wide-slot-container">
            <slot></slot>
        </div>
    </div>
</template>

<style>

.wide-slot { 
  display: flex;
  justify-content: center;
}
.wide-slot-container {
  min-width: 900px;
  align-items: center;
}

p {
    margin-bottom: 18px;
}

</style>