import { allRequest, getPokemon, getSpecies } from '../api/pokeApi';
import { Pokemon } from '../interfaces/Pokemon';
import { PokeDatabaseType } from './usePokeDatabase';

export interface PokeApiPokeList {
	name: string;
	url: string;
}

export interface PokeApiSearchResult {
	results?: PokeApiPokeList[];
}

const usePokeApi = (database: PokeDatabaseType) => {
	const fetchSpecies = async (pokemon: Pokemon) => {
		if (database.pokemonByName(pokemon.name)?.species?.base_happiness) return;

		if (!pokemon.species?.url || !pokemon.id) return;

		const { data } = await getSpecies(pokemon.species?.url);

		database.addSpecies(pokemon.id, data);
	};

	const start = async () => {
		const { data } = await allRequest();
		
    data?.results?.forEach(async (pokemon: PokeApiPokeList) => {
      if (typeof database.pokemonByName(pokemon.name)?.id !== 'undefined')
        return;

      const { data: p } = await getPokemon(pokemon);

      database.addPokemon(p);
    });
	};

	return {
		start,
		fetchSpecies,
	};
};

export default usePokeApi;
