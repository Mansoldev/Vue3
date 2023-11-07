<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
    pokemon: Pokemon;
}

defineProps<Props>();
</script>

<template>
    <div class="pokemon-card">
        <img :src="pokemon.frontSprite" :alt="pokemon.name"/>
        <h3>{{ pokemon.name }}</h3>
    </div>
</template>

<style scoped>
.pokemon-card {
    display:flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 0 5px 10px 5px;
}

img {
    width: 150px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    transition: all 0.5s;
}

img:hover {
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
    transition: all 0.5s;
}
</style>