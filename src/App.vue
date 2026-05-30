<script setup>
</script>

<template>
  <div class="topbar">
    <img class="logo" alt="Vue Logo" src="./assets/vue.svg" />
    <router-link to="/">Home</router-link>
    <span class="divider">|</span>
    <router-link to="/about">About</router-link>
    <span class="divider">|</span>
    <router-link to="/contact">Contact Us</router-link>
  </div>

  <div class="container">
    <br />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: lemonchiffon;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.divider {
  color: black;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.logo {
  width: 15px;
  height: auto;
}
</style>
