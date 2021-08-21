import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import usePokeApi from '../../hooks/usePokeApi';
import Voltorb from '../fixtures/voltorb.json';

import { allRequest, getPokemon, getSpecies } from '../../api/pokeApi';

jest.mock('../../api/pokeApi');

const mockList = [{ name: 'voltorb', url: 'url-test' }];
const mockSpecie = {
	base_happiness: 'test',
	url: 'teste-url',
	flavor_text_entries: [
		{
			flavor_text: 'flavor',
		},
	],
};
const mockVoltorb = Voltorb as any;

const mockApiCalls = (
	list = mockList,
	pokemon = mockVoltorb,
	species = mockSpecie
) => {
	(allRequest as any).mockResolvedValue({
		data: {
			results: list,
		},
	});

	(getPokemon as any).mockResolvedValue({
		data: pokemon,
	});

	(getSpecies as any).mockResolvedValue({
		data: species,
	});
};

const setup = (byName = mockVoltorb, byId = mockVoltorb) => {
	const pokemonByName = jest.fn().mockReturnValue(byName);
	const pokemonById = jest.fn().mockReturnValue(byId);
	const addSpecies = jest.fn();
	const addPokemon = jest.fn();

	const { result } = renderHook(() =>
		usePokeApi({
			pokemonByName,
			pokemonById,
			addSpecies,
			addPokemon,
			list: [mockVoltorb],
		})
	);

	return {
		pokemonByName,
		pokemonById,
		addSpecies,
		addPokemon,
		result,
	};
};

test('allows fetch the initial list of pokemon and first fetch of data', async () => {
	mockApiCalls();
	const { result, pokemonByName, addPokemon } = setup(false);

	act(() => {
		result.current.start();
	});

	await waitFor(() => {
		expect(pokemonByName).toHaveBeenCalledWith('voltorb');
		expect(addPokemon).toHaveBeenCalledWith(mockVoltorb);
	});
});

test('forbidden to fetch the data for a already fetched pokemon', async () => {
	mockApiCalls();
	const { result, pokemonByName, addPokemon } = setup();

	act(() => {
		result.current.start();
	});

	await waitFor(() => {
		expect(pokemonByName).toHaveBeenCalledWith('voltorb');
		expect(addPokemon).not.toBeCalled();
	});
});

test('allows fetch species data', async () => {
	mockApiCalls();
	const { result, pokemonByName, addPokemon, addSpecies } = setup();

	act(() => {
		result.current.fetchSpecies(Voltorb as any);
	});

	await waitFor(() => {
		expect(pokemonByName).toHaveBeenCalledWith('voltorb');
		expect(addPokemon).not.toBeCalled();
		expect(addSpecies).toHaveBeenCalled();
	});
});

test('forbidden to fetch species from not loaded pokemon', async () => {
	mockApiCalls();
	const { result, pokemonByName, addSpecies } = setup(false);

	act(() => {
		result.current.fetchSpecies({ name: 'voltorb' } as any);
	});

	await waitFor(() => {
		expect(pokemonByName).toHaveBeenCalledWith('voltorb');
		expect(addSpecies).not.toBeCalled();
	});
});

test('forbidden to fetch species its already in database', async () => {
	mockApiCalls();
	const { result, pokemonByName, addSpecies } = setup({
		species: { base_happiness: true },
	});

	act(() => {
		result.current.fetchSpecies({ name: 'voltorb' } as any);
	});

	await waitFor(() => {
		expect(pokemonByName).toHaveBeenCalledWith('voltorb');
		expect(addSpecies).not.toBeCalled();
	});
});
