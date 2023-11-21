<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useClients from '../composables/useClients';

//console.log(import.meta.env) Ver el environment
const { isLoading, clients, currentPage, totalPages, getPage } = useClients()
</script>

<template>
    <div>
        <h2>Clients List</h2>

        <ClientList :clients="clients"/>

        <PaginationNumbers  :currentPage="currentPage" 
                            :totalPages="totalPages"
                            @pageChanged="getPage"/>
                            <!-- @pageChanged="($event) => getPage($event)"
                            @pageChanged="(page) => getPage(page) -->

        <LoadingModal v-if="isLoading"/>
    </div>
</template>