import axios, { AxiosPromise, AxiosResponse } from 'axios';

import * as React from 'react';
import { useAsyncFn } from 'react-use';
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
	const base = 'https://pokeapi.co/api/v2';

	const get = (url: string): AxiosPromise<any[]> => axios.get(url);
	const species = (url: string): AxiosPromise<PokeApiPokemonSpecies> =>
		axios.get(url);
	const fetch = (url: string): AxiosPromise<PokeDatabasePokemon> =>
		axios.get(url);
	const allRequest = () => get(`${base}/pokemon/?limit=151`);

	const [allResult, start] = useAsyncFn(allRequest);

	const fetchSpecies = async (pokemon: PokeDatabasePokemon) => {
		if (database.pokemonByName(pokemon.name)?.species.base_happiness) return;

		const { data } = await species(pokemon.species.url);

		database.addSpecies(pokemon.id, data);
	};

	const fetchList = async (list: PokeApiPokeList[]) => {
		list.forEach(async (pokemon: PokeApiPokeList) => {
			if (database.pokemonByName(pokemon.name)?.id) return;

			const { data: p } = await fetch(`${base}/pokemon/${pokemon.name}`);

			database.addPokemon(p);
		});
	};

	React.useEffect(() => {
		const { loading, value } = allResult;
		if (loading) return;

		if (value) {
			const { data } = value as AxiosResponse<PokeApiSearchResult>;
			if (data) fetchList(data?.results || []);
		}
	}, [allResult]);

	return {
		start,
		fetchSpecies,
	};
};

export default usePokeApi;
