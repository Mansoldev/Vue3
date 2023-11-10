<script setup lang="ts">

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