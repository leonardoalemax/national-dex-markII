import * as React from 'react';
import { filter } from 'lodash';
import usePokeDatabase from './usePokeDatabase';
import usePokeApi from './usePokeApi';
import { Pokemon } from '../interfaces/Pokemon';

const usePokeState = () => {
	const database = usePokeDatabase();
	const { start, fetchSpecies } = usePokeApi(database);
	const [selected, updateSelected] = React.useState(0);
	const [started, setStarted] = React.useState(false);
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		if (started) return;

		start();
		setStarted(true);
	}, [start, started]);

	const select = (pokemon?: Pokemon) => {
		if (!pokemon) {
			updateSelected(0);
			return;
		}

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
