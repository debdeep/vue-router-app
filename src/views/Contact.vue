<script setup>
import AppBack from "../components/generics/AppBack.vue";
import useRouterLogger from "../composables/routeLogger";
import { onMounted } from "vue";

// Destructure the reactive route and router objects
const { router, route } = useRouterLogger();

const email = "debdeepm89@gmail.com";
const maskedEmail = email.replace(/(.{3})(.*)(@.*)/, "$1XXX$3");
onMounted(() => {
  console.log("Contact component mounted");

  // To look at the full path, query params, or name:
  console.log("Current Route Path:", route.path);
  console.log("Full Route Object:", route);
  console.log("Router Instance:", router);
});
</script>

<template>
  <div class="contact">
    <h1>Contact Us Page</h1>
    <br />
    <a :href="`mailto:${email}`"
      >Click to send Email to:
      <b
        ><i>{{ maskedEmail }}</i></b
      >
    </a>
    <AppBack />
  </div>
</template>