<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Welcome from "./../components/Welcome.vue";
import useRouterLogger from "../composables/routeLogger";

// Destructure the reactive route and router objects
const { router, route } = useRouterLogger();

onMounted(() => {
  console.log("Home component mounted");

  // To look at the full path, query params, or name:
  console.log("Current Route Path:", route.path);
  console.log("Full Route Object:", route);
  console.log("Router Instance:", router);
});
</script>