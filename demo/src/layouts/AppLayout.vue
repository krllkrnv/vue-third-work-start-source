<template>
    <div class="app-layout">
        <app-layout-header />
        <slot />
    </div>
</template>

<script setup>
import AppLayoutHeader from "./AppLayoutHeader.vue";
</script>