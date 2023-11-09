import { ref, computed, onMounted } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true)

export const usePokemons = () => {
    // if (pokemons.value.length === 0) {
    //     getPokemons()
    //         .then( data => {
    //             pokemons.value = data
    //             isLoading.value = false
    //         })
    // }
    
    const loadPokemons = async() => {
        const data = await getPokemons()
        pokemons.value = data
        isLoading.value = false
    }
    onMounted(async() => {
        await loadPokemons()
    })

    return {
        pokemons,
        isLoading,

        count: computed(() => pokemons.value.length)
    }
}