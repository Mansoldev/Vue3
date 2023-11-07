<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const { id } = route.params
</script>

<template>
    <div>
        <h2>pokemon by {{ id }}</h2>
    </div>
</template>