import { useQuery } from "@tanstack/vue-query"
import type { Client } from "../interfaces/client"
import clientsApi from "@/api/clients-api"
import { useClientsStore } from "@/store/clients"
import { storeToRefs } from "pinia"
import { watch } from "vue"

const getClients = async( page: number ):Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>(`clients?_page=${page}`)
    return data
}

const useClients = () => {
    const store = useClientsStore()
    const { currentPage, clients, totalPages } = storeToRefs( store )

    const { isLoading, data } = useQuery({
        queryKey: ['clients?page=', currentPage],
        queryFn: () => getClients(currentPage.value),
        staleTime: 1000 * 60 //1 minute api call cache
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
    }
}

export default useClients