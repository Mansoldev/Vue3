<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconPinia from '@/shared/components/icons/IconPinia.vue'
</script>

<template>
  <header>
    <IconPinia/>

    <h3>Pinia - Exercises</h3>

    <nav>
      <RouterLink to="/">Counter Options</RouterLink>
      <RouterLink to="/counter-2">Counter Setup</RouterLink>
      <RouterLink to="/clients">Clients</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

h3 {
  color:darkgrey;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>
