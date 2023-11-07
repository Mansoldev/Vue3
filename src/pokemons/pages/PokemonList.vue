<script setup lang="ts">
//import { getPokemons } from '../helpers/get-pokemons'
//const pokemons = await getPokemons();
import { usePokemons } from '../composables/usePokemons';

const { count, pokemons, isLoading } = usePokemons();
</script>

<template>
    <div>
        <h2>pokemon list - {{ count }}</h2>

        <h3 v-if="isLoading">Cargando...</h3>

        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>