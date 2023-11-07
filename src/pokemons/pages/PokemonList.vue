<script setup lang="ts">
//import { ref } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
//import type { Pokemon } from '../interfaces'

const pokemons = await getPokemons();

//const pokemons = ref<Pokemon[]>([])

// getPokemons()
//     .then( data => pokemons.value = data)
</script>

<template>
    <div>
        <h2>pokemon list</h2>

        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>