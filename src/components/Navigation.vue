<template>
  <div class="topbar">
    <img class="logo" alt="Vue Logo" src="../assets/vue.svg" />
    <router-link to="/">Home</router-link>
    <span class="divider">|</span>
    <router-link to="/about">About</router-link>
    <span class="divider">|</span>
    <router-link to="/contact">Contact Us</router-link>
    <span class="divider">|</span>
    <a href="https://router.vuejs.org/" target="_blank"
      >Vue Router Official Doc</a
    >
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgb(200, 225, 241);
  border-radius: 8px;
  margin-bottom: .5rem;
}
.divider {
  color: black;
}
.logo {
  width: 15px;
  height: auto;
}
</style>