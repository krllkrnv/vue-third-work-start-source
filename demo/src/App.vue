<template>
  <app-layout>
    <home-view />
  </app-layout>
</template>

<script setup>
import { AppLayout } from "@/layouts";
import { HomeView } from "@/views";
</script>



<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
</style>

<style lang="scss">
@import "@frontend/assets/scss/app.scss";
</style>
