<script setup>
import AppBack from "../components/generics/AppBack.vue";
import useRouterLogger from "../composables/routeLogger";
import { onMounted } from "vue";
import { CONTACT_US_PAGE } from "../utils/constants.js";

const { router, route } = useRouterLogger();

const email = "debdeepm89@gmail.com";
const maskedEmail = email.replace(/(.{3})(.*)(@.*)/, "$1XXX$3");
onMounted(() => {
  console.log("Contact component mounted");

  console.log("Current Route Path:", route.path);
  console.log("Full Route Object:", route);
  console.log("Router Instance:", router);
});
</script>

<template>
  <div class="contact">
    <h1>{{ CONTACT_US_PAGE.HEADER }}</h1>
    <br />
    <a :href="`mailto:${email}`">{{ CONTACT_US_PAGE.MESSAGE }}
      <b><i>{{ maskedEmail }}</i></b>
      >
    </a>
    <AppBack />
  </div>
</template>