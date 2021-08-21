import * as React from 'react';
import { filter } from 'lodash';
import usePokeDatabase, { PokeDatabasePokemon } from './usePokeDatabase';
import usePokeApi from './usePokeApi';

const usePokeState = () => {
	const database = usePokeDatabase();
	const { start, fetchSpecies } = usePokeApi(database);
	const [selected, updateSelected] = React.useState(0);
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		start();
	}, []);

	const select = (pokemon?: PokeDatabasePokemon) => {
    if(!pokemon) return;

    fetchSpecies(pokemon);
    
    if (pokemon.id) updateSelected(pokemon.id);
	};

	return {
		text,
		setText,
		list: filter(database.list, (e) => e.name.toString().indexOf(text) > -1),
		selected: database.pokemonById(selected),
		select,
	};
};

export default usePokeState;
