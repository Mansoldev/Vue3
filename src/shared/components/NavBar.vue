<script setup lang="ts">
import { computed, toRef } from 'vue';
import type { RouterLink } from '@/router/list-routes';

interface Props {
    title?: string;
    links: RouterLink[];
    isSecondary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'CompoApp',
    isSecondary: false
});

//const links = toRef(props.links.filter(link => link.visible));
// const links = toRef(props, 'links');
const links = computed(() => props.links.filter(link => link.visible))
</script>

<template>
    <nav>
        <template v-if="!$props.isSecondary">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
            <span v-if="$props.title" class="appTitle">{{ title }}</span>
        </template>

        <RouterLink v-for="link in links" :to="link.path" :key="link.name">
            {{ link.title }}
        </RouterLink>
    </nav>
</template>

<style>
nav {
  align-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}

.logo {
    margin-right: 5px;
}
.appTitle {
    margin-right: 10px;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    margin-right: 5px;
    border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
    border: 0;
    margin-right: 0;
}
nav a.router-link-active {
    color: var(--color-text);
}
nav a.router-link-active:hover {
    background-color: transparent;
}
</style>