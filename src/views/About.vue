<script setup>
import { ref, onMounted } from "vue";
import useRouterLogger from "../composables/routeLogger";
import GoBack from "../components/GoBack.vue";

// Destructure the reactive route and router objects
const { router, route } = useRouterLogger();

const features = ref([
  "Client-side navigation without page reload",
  "Dynamic route matching with parameters",
  "Nested routes for complex layouts",
  "Lazy loading for code splitting",
  "Navigation guards for authentication",
  "Route meta information handling",
]);

const navigationMethods = ref([
  "router.push() - Add entry to history stack",
  "router.replace() - Replace current entry",
  "router.go(n) - Navigate backward or forward",
]);

onMounted(() => {
  console.log("About component mounted");

  // To look at the full path, query params, or name:
  console.log("Current Route Path:", route.path);
  console.log("Full Route Object:", route);
  console.log("Router Instance:", router);
});
</script>

<template>
  <div class="about">
    <h1>Vue Router Cheatsheet</h1>

    <section class="intro">
      <h2>What is Vue Router?</h2>
      <p>
        Vue Router is the official router library for Vue.js applications. It
        enables single-page application (SPA) development by managing component
        rendering based on URL changes. Unlike traditional server-side routing,
        Vue Router handles navigation entirely on the client-side, eliminating
        full page reloads and providing seamless user experiences.
      </p>
    </section>

    <section class="concepts">
      <h2>Core Concepts</h2>
      <p>
        Vue Router works with routes, components, and navigation. Each route
        maps a URL path to a specific Vue component. When users navigate to
        different paths, Vue Router dynamically renders the corresponding
        component in the router-view placeholder. The router-link component
        handles navigation while the router object manages programmatic
        navigation. Routes can include parameters, named routes, and nested
        child routes for hierarchical navigation.
      </p>
    </section>

    <section class="features">
      <h2>Key Features</h2>
      <ul>
        <li v-for="feature in features" :key="feature">{{ feature }}</li>
      </ul>
    </section>

    <section class="navigation">
      <h2>Navigation Methods</h2>
      <ul>
        <li v-for="method in navigationMethods" :key="method">{{ method }}</li>
      </ul>
    </section>

    <section class="best-practices">
      <h2>Best Practices</h2>
      <p>
        Use router-link for internal navigation to maintain history. Implement
        route guards to protect routes requiring authentication. Implement lazy
        loading for large applications to improve initial load time. Use named
        routes for maintainability. Handle 404 errors with wildcard routes.
        Organize routes hierarchically for complex applications. Always validate
        route parameters and handle edge cases in components. Use meta fields
        for route-specific configuration.
      </p>
    </section>
    <GoBack />
  </div>
</template>

<style scoped>
.about {
  max-width: 900px;
  padding: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #42b983;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

h2 {
  color: #42b983;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
  background: #f5f5f5;
  padding: 1.5rem;
  border-left: 4px solid #42b983;
  border-radius: 4px;
}

p {
  margin-bottom: 1rem;
  text-align: justify;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}
</style>