<template>
  <!-- External links -->
  <a
    v-if="isExternal"
    :href="to"
    :class="linkClass"
    :target="externalTarget"
    :rel="externalRel"
    :aria-label="ariaLabel"
  >
    <slot />
  </a>

  <!-- Internal links -->
  <RouterLink
    v-else
    :to="to"
    custom
    v-slot="{ href, navigate }"
  >
    <a
      :href="href"
      :class="linkClass"
      @click="navigate"
      :aria-label="ariaLabel"
    >
      <slot />
    </a>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  linkClass: {
    type: String,
    default: ""
  },
  ariaLabel: {
    type: String,
    default: ""
  }
});

// Detect external links safely
const isExternal = computed(() => {
  return (
    typeof props.to === "string" &&
    /^(https?:\/\/|mailto:|tel:)/i.test(props.to)
  );
});

// Handle target/rel conditionally
const externalTarget = computed(() => {
  if (typeof props.to === "string" && /^https?:\/\//i.test(props.to)) {
    return "_blank";
  }
  return null; // mailto/tel don’t need new tab
});

const externalRel = computed(() => {
  return externalTarget.value ? "noopener noreferrer" : null;
});
</script>
