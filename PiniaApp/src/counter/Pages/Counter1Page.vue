<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "@/store/counter-options"

const counterStore = useCounterOptionsStore()
const { count, squareCount } = storeToRefs( counterStore );
</script>

<template>
    <h1>Pinia Options</h1>
    <h4>Counter: {{ counterStore.count }} - {{ count }}</h4>
    <h4>Square: {{ counterStore.squareCount }} - {{ squareCount }}</h4>
</template>