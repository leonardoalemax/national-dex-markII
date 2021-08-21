import { allRequest, getPokemon, getSpecies } from '../api/pokeApi';
import { PokeDatabasePokemon, usePokeDatabaseType } from './usePokeDatabase';

export interface PokeApiPokemonSpecies {
	base_happiness: string;
	url: string;
	flavor_text_entries: {
		flavor_text: string;
	}[];
}

export interface PokeApiPokeList {
	name: string;
	url: string;
}

export interface PokeApiSearchResult {
	results?: PokeApiPokeList[];
}

const usePokeApi = (database: usePokeDatabaseType) => {
	const fetchSpecies = async (pokemon: PokeDatabasePokemon) => {
		if (database.pokemonByName(pokemon.name)?.species?.base_happiness) return;

		if (!pokemon.species?.url || !pokemon.id) return;

		const { data } = await getSpecies(pokemon.species?.url);

		database.addSpecies(pokemon.id, data);
	};

	const start = async () => {
		const { data } = await allRequest();
		if (data) {
			data?.results?.forEach(async (pokemon: PokeApiPokeList) => {
				if (typeof database.pokemonByName(pokemon.name)?.id !== 'undefined')
					return;

				const { data: p } = await getPokemon(pokemon);

				database.addPokemon(p);
			});
		}
	};

	return {
		start,
		fetchSpecies,
	};
};

export default usePokeApi;
