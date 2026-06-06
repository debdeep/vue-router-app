<template>
  <div class="topbar">
    <img class="logo" alt="Vue Logo" src="../assets/vue.svg" />
    <AppLink to="/"> {{ NAVIGATION_BAR.HOME }} </AppLink>
    <span class="divider">|</span>
    <AppLink to="/about"> {{ NAVIGATION_BAR.ABOUT }} </AppLink>
    <span class="divider">|</span>
    <AppLink to="/contact"> {{ NAVIGATION_BAR.CONTACT_US }} </AppLink>
    <span class="divider">|</span>
    <AppLink to="https://router.vuejs.org/">{{ NAVIGATION_BAR.ROUTER_DOC }}</AppLink>
  </div>
</template>

<script setup>

import AppLink from "./generics/AppLink.vue";
import { NAVIGATION_BAR } from '../utils/constants.js';

</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgb(200, 225, 241);
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