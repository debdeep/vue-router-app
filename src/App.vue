<script setup>
</script>

<template>
  <div class="topbar">
    <router-link to="/">Home</router-link>
    <span class="divider">|</span>
    <router-link to="/about">About</router-link>
    <span class="divider">|</span>
    <router-link to="/contact">Contact Us</router-link>
    <!-- <a href="#">More Info</a> -->
  </div>
  <div class="container">
    <img class="logo" alt="Vue Logo" src="./assets/vue.svg" />
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
  flex-direction: column;
}
.logo {
  width: 120px;
  height: auto;
}
</style>
