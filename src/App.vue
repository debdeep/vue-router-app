<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <div class="container content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
