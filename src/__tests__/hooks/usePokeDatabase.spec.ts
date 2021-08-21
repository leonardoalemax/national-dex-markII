import { renderHook, act } from '@testing-library/react-hooks';
import usePokeDatabase from '../../hooks/usePokeDatabase';
import Voltorb from '../fixtures/voltorb.json';

test('allows adds a new pokemon', () => {
	const { result } = renderHook(() => usePokeDatabase());
	expect(result.current.list).toHaveLength(0);

	act(() => {
		result.current.addPokemon(Voltorb as any);
	});

	expect(result.current.list).toHaveLength(1);
});

test('allows search a pokemon by id', () => {
	const { result } = renderHook(() => usePokeDatabase());
	expect(result.current.list).toHaveLength(0);

	act(() => {
		result.current.addPokemon(Voltorb as any);
	});

	expect(result.current.list).toHaveLength(1);

	expect(result.current.pokemonById(Voltorb.id).name).toEqual(Voltorb.name);
});

test('allows search a pokemon by Name', () => {
	const { result } = renderHook(() => usePokeDatabase());
	expect(result.current.list).toHaveLength(0);

	act(() => {
		result.current.addPokemon(Voltorb as any);
	});

	expect(result.current.list).toHaveLength(1);

	expect(result.current.pokemonByName(Voltorb.name).id).toEqual(Voltorb.id);
});

test('allows add a pokemon species', () => {
	const species = {
		base_happiness: 'test',
		url: 'teste-url',
		flavor_text_entries: [
			{
				flavor_text: 'flavor',
			},
		],
	};

	const { result } = renderHook(() => usePokeDatabase());
	expect(result.current.list).toHaveLength(0);

	act(() => {
		result.current.addPokemon(Voltorb as any);

		result.current.addSpecies(Voltorb.id, species as any);
	});

	expect(result.current.list).toHaveLength(1);

	const voltorb = result.current.pokemonById(Voltorb.id);

	expect(voltorb.species).toEqual({
		name: Voltorb.name,
		...species,
	});
});

test('forbidden add a pokemon species for a not loaded pokemon', () => {
	const species = {
		base_happiness: 'test',
		url: 'teste-url',
		flavor_text_entries: [
			{
				flavor_text: 'flavor',
			},
		],
	};

	const { result } = renderHook(() => usePokeDatabase());
	expect(result.current.list).toHaveLength(0);

	act(() => {
		result.current.addPokemon(Voltorb as any);

		result.current.addSpecies(3, species as any);
	});

	expect(result.current.list).toHaveLength(1);

	const voltorb = result.current.pokemonById(Voltorb.id);

	expect(voltorb.species).toStrictEqual({
		name: Voltorb.name,
		url: 'https://pokeapi.co/api/v2/pokemon-species/100/',
	});
});
