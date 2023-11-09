<script setup lang="ts">
import store from '@/store/store'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons';
import PokemonCardList from '../components/PokemonCardList.vue';

useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    select(data) {
        store.loadedPokemons(data)
    }
})
</script>

<template>
    <div>
        <h2 v-if="store.pokemons.isLoading">Loading...</h2>

        <div v-else-if="store.pokemons.hasError">
            {{ store.pokemons.errorMessage }}
        </div>

        <div v-else>
            <h2>pokemon list native - {{ store.pokemons.count }}</h2>

            <PokemonCardList :pokemons="store.pokemons.list ?? []"/>
        </div>
    </div>
</template>