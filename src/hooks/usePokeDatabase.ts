import * as React from 'react';
import { orderBy } from 'lodash';

import { PokeApiPokemonSpecies } from './usePokeApi';

export interface PokeDatabaseTypes {
	slot: number;
	type: {
		name: string;
	};
}

export interface PokeDatabasePokemon {
	name: string;
	id: number;
	species: PokeApiPokemonSpecies;
	types: PokeDatabaseTypes[];
	sprites: {
		front_default: string;
	};
}

export interface usePokeDatabaseType {
	list: PokeDatabasePokemon[];
	addPokemon: (pokemon: PokeDatabasePokemon) => void;
	addSpecies: (id: number, specie: PokeApiPokemonSpecies) => void;
	pokemonByName: (name: string) => PokeDatabasePokemon;
	pokemonById: (id: number) => PokeDatabasePokemon;
}

const usePokeDatabase: () => usePokeDatabaseType = () => {
	const [list, updateList] = React.useState<PokeDatabasePokemon[]>([]);

	const orderList = (pokemonList: PokeDatabasePokemon[]) =>
		orderBy(pokemonList, ['id', ['desc']]);

	const addPokemon = (pokemon: PokeDatabasePokemon) => {
		updateList((e) => orderList([...e, pokemon]));
	};

	const pokemonById = (id: number) => list.filter((e) => e.id === id)[0];
	const pokemonByName = (name: string) =>
		list.filter((e) => e.name === name)[0];

	const addSpecies = (id: number, specie: PokeApiPokemonSpecies) => {
		updateList((pokemonList: PokeDatabasePokemon[]) =>
			pokemonList.map((pokemon) => {
				if (pokemon.id !== id) return pokemon;

				return {
					...pokemon,
					species: {
						...pokemon.species,
						...specie,
					},
				};
			})
		);
	};

	return {
		list,
		addPokemon,
		pokemonByName,
		pokemonById,
		addSpecies,
	};
};

export default usePokeDatabase;
