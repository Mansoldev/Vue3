<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useClients from '../composables/useClients';

const { isLoading } = useClients()
</script>

<template>
    <div>
        <h1>Clients List</h1>

        <ClientList/>

        <PaginationNumbers/>

        <LoadingModal v-if="isLoading"/>
    </div>
</template>