import * as React from 'react';
import { orderBy } from 'lodash';

import { Pokemon } from '../interfaces/Pokemon';
import { PokemonSpecies } from '../interfaces/PokemonSpecies';

export interface PokeDatabaseType {
	list: Pokemon[];
	addPokemon: (pokemon: Pokemon) => void;
	addSpecies: (id: number, specie: PokemonSpecies) => void;
	pokemonByName: (name: string) => Pokemon;
	pokemonById: (id: number) => Pokemon;
}

const usePokeDatabase: () => PokeDatabaseType = () => {
	const [list, updateList] = React.useState<Pokemon[]>([]);

	const orderList = (pokemonList: Pokemon[]) =>
		orderBy(pokemonList, ['id', ['desc']]);

	const addPokemon = (pokemon: Pokemon) => {
		updateList((e) => orderList([...e, pokemon]));
	};

	const pokemonById = (id: number) => list.filter((e) => e.id === id)[0];
	const pokemonByName = (name: string) =>
		list.filter((e) => e.name === name)[0];

	const addSpecies = (id: number, specie: PokemonSpecies) => {
		updateList((pokemonList: Pokemon[]) =>
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
