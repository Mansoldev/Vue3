import { computed, watchEffect } from 'vue'
import { useQuery } from '@tanstack/vue-query'

import { getPokemons } from '../helpers/get-pokemons'

export const usePokemons = () => {
    const { isLoading, data:pokemons, isError, error } = useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
        // retry: 1,
        // retryDelay: 5000
    })

    watchEffect(() => {
        //console.log('isError', isError.value)
    })

    return {
        pokemons,
        isLoading,
        isError,
        error,

        count: computed(() => pokemons.value?.length ?? 0)
    }
}