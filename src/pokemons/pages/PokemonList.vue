<script setup lang="ts">
import pokemonApi from '../api/pokemonApi';
import type { PokemonListResponse } from '../interfaces/pokemons-list.response';

pokemonApi.get<PokemonListResponse>('/pokemon?limit=50')
    .then( resp => console.log(resp.data.results))
</script>

<template>
    <div>
        <h2>pokemon list</h2>
    </div>
</template>