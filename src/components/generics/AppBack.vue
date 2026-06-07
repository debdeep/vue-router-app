<template>
  <div class="go-back">
    <button @click="goBack"><slot>Back</slot></button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  if (window.history.length > 1) {
    router.back(); // Go back to the previous page
  } else {
    router.push("/"); // If no history, navigate to home
  }
}
</script>

<style scoped>
.go-back {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
</style>
