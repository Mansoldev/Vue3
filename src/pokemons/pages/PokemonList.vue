<script setup lang="ts">
import { getPokemons } from '../helpers/get-pokemons';

getPokemons().then( data => console.log(data))
</script>

<template>
    <div>
        <h2>pokemon list</h2>
    </div>
</template>