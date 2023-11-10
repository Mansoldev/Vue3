<script setup lang="ts">
import useClients from '../composables/useClients';
//console.log(import.meta.env) Ver el environment

useClients()
</script>

<template>
    <ul>
        <li>
            <RouterLink :to="{
                name: 'client-id', 
                params: {id: 1}
            }">
                ClientName
            </RouterLink>"
        </li>
    </ul>
</template>