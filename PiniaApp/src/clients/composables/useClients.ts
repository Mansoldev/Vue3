import { useQuery } from "@tanstack/vue-query"
import type { Client } from "../interfaces/client"
import clientsApi from "@/api/clients-api"
import { useClientsStore } from "@/store/clients"
import { storeToRefs } from "pinia"
import { computed, watch } from "vue"

const getClients = async():Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>('clients?_page=1')
    return data
}

const useClients = () => {
    const store = useClientsStore()
    const { currentPage, clients, totalPages } = storeToRefs( store )

    const { isLoading, data } = useQuery({
        queryKey: ['clients?page=', 1],
        queryFn: () => getClients(),
        // select(newClients) {
        //     store.setClients(newClients)
        // }
    })

    //When data change, update store clients
    watch(data, clients => {
        if (clients) store.setClients(clients)
    }) 

    return {
        //state
        isLoading, 
        clients,
        currentPage,
        totalPages,

        //Methods
        getPage(  page: number ) {
            store.setPage(page)
        },

        //Getters
        TotalPageNumbers: computed(
            () => [...new Array(totalPages.value)].map((val, index) => index + 1)
        )
    }
}

export default useClients