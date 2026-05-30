<script setup>
const email = "debdeepm89@gmail.com";
const maskedEmail = email.replace(/(.{3})(.*)(@.*)/, "$1XXX$3");
</script>

<template>
  <div class="contact">
    <h1>Contact Us Page</h1>
    <a :href="`mailto:${email}`"
      >Click to send Email to:
      <b
        ><i>{{ maskedEmail }}</i></b
      >
    </a>
  </div>
</template>