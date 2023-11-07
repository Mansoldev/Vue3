<script setup lang="ts">
import PokemonCard from './PokemonCard.vue';
import type { Pokemon } from '../interfaces';

interface Props {
    pokemons: Pokemon[];
}

defineProps<Props>();
</script>

<template>
    <div class="card-list">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon"/>
    </div>
</template>

<style scoped>
.card-list {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>