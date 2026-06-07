<template>
     <div class="no-results-container">
      <p class="no-data">No Records Found</p>
      <img src="@/assets/no-results.jpg" alt="No results found" class="no-results-img" />
    </div>
</template>
<script setup>
import { EMPLOYEE } from '../utils/constants.js';   
</script>

<style scoped>
/* The container wraps both the image and the paragraph */
.no-results-container {
  display: flex;
  flex-direction: column; /* Stacks image on top of text */
  justify-content: center; /* Centers items vertically */
  align-items: center;     /* Centers items horizontally */
  min-height: 400px;       /* Gives it a nice dedicated area on screen */
  width: 100%;
  margin-top: 2rem;
}

.no-data {
  text-align: center;
  font-weight: bold;
  color: rgb(222, 100, 100);
  margin-top: 1rem;
}

/* Control the size of your no-results asset image */
.no-results-img {
  max-width: 300px;        /* Limits width so it doesn't blow up */
  height: auto;            /* Keeps original aspect ratio intact */
  margin-bottom: 1rem;     /* Adds breathing room above the text */
}

</style>