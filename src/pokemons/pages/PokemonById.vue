<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';

const route = useRoute();

const { id } = route.params
const { isLoading, isError, pokemon, error } = usePokemon(id.toString())
</script>

<template>
    <div>
        <h2 v-if="isLoading">Loading...</h2>
        <h2 v-else-if="isError">
            {{ error }}
        </h2>

        <div v-else>
            <h1>{{ pokemon?.name }}</h1>
            <div class="character-container">
                <img :src="pokemon?.frontSprite" :alt="pokemon?.name"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
}

img {
    width: 150px;
    border-radius: 5px;
}
</style>