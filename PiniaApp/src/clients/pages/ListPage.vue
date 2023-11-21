<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
</script>

<template>
    <div>
        <h1>Clients List</h1>

        <ClientList/>

        <PaginationNumbers/>

        <!-- LoadingModal -->
    </div>
</template>