import { useQuery } from "@tanstack/vue-query"
import type { Client } from "../interfaces/client"
import clientsApi from "@/api/clients-api"

const getClients = async():Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>('clients?_page=1')
    return data
}

const useClients = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['clients?page=', 1],
        queryFn: () => getClients()
    })

    return {
        isLoading, 
        data
    }
}

export default useClients