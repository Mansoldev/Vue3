<script setup lang="ts">
//import { getPokemons } from '../helpers/get-pokemons'
//const pokemons = await getPokemons();
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';

const { count, pokemons, isLoading, isError, error } = usePokemons();
</script>

<template>
    <div>
        <h2 v-if="isLoading">Loading...</h2>

        <div v-else-if="isError">
            {{ error }}
        </div>

        <div v-else>
            <h2>pokemon list - {{ count }}</h2>

            <PokemonCardList :pokemons="pokemons ?? []"/>
        </div>
    </div>
</template>