<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterSetupStore } from "@/store/counter-setup"
import CounterSetupValue from "../components/CounterSetupValue.vue";

const counterStore = useCounterSetupStore()
const { count, squareCount } = storeToRefs( counterStore );
//const { increment, incrementBy, $reset} = counterStore; //$reset explota de esta forma
</script>

<template>
    <h1>Pinia Setup</h1>
    <h4>Counter: {{ counterStore.count }} - {{ count }}</h4>
    <h4>Square: {{ counterStore.squareCount }} - {{ squareCount }}</h4>

    <br>
    <button @click="counterStore.increment()">+1</button>
    <button @click="counterStore.incrementBy(2)">+2</button>
    <button @click="counterStore.incrementBy(5)">+5</button>
    <button @click="counterStore.$reset()">Reset</button>

    <CounterSetupValue/>
</template>

<style scoped>
button {
    margin-right: 5px;
}
</style>