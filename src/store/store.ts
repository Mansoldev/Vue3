import { reactive } from 'vue';
import type { Pokemon } from "@/pokemons/interfaces"

interface Store {
    // State
    pokemons: {
        list:           Pokemon[],
        count:          number,
        isLoading:      boolean,
        hasError:       boolean,
        errorMessage?:  string
    },

    // Actions / Méthods
    startLoadingPokemons: () => void;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (error: string) => void;
}

const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: undefined
    },

    // Actions / Méthods
    startLoadingPokemons: function():void {

    },
    loadedPokemons: function(data: Pokemon[]):void {

    },
    loadPokemonsFailed: function(error: string):void {

    },
})

export default store;