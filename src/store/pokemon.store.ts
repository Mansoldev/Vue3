import type { Pokemon } from "@/pokemons/interfaces"

interface Store {
    // State
    pokemons: {
        list:           Pokemon[],
        count:          number,
        isLoading:      boolean,
        hasError:       boolean,
        errorMessage:   string
    },

    // Actions / Méthods
    startLoadingPokemons: () => void;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (erroe: string) => void;
}