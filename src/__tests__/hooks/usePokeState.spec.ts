import { renderHook, act } from '@testing-library/react-hooks';
import usePokeState from '../../hooks/usePokeState';
import usePokeApi from '../../hooks/usePokeApi';
import usePokeDatabase from '../../hooks/usePokeDatabase';

import Voltorb from '../fixtures/voltorb.json';

jest.mock('../../hooks/usePokeApi');
jest.mock('../../hooks/usePokeDatabase');

const mockVoltorb = Voltorb as any;

const setup = (byId = mockVoltorb) => {
	const pokemonById = jest.fn().mockReturnValue(byId);
  const start = jest.fn();
	const fetchSpecies = jest.fn();

  (usePokeDatabase as any).mockImplementation(() => ({
    list: [byId], 
    pokemonById
  }));

  (usePokeApi as any).mockImplementation(() => ({
    start, fetchSpecies
  }));

	const {result} = renderHook(() => usePokeState());

	return {
		pokemonById,
		result,
	};
};

test('allows change the text of state', () => {
  
	const { result } = setup();
	expect(result.current.list).toHaveLength(1);

	act(() => {
		result.current.setText('Voltorb');
	});

	expect(result.current.text).toBe('Voltorb');
});


test('allows change the select a pokemon', () => {
  
	const { result } = setup();
	expect(result.current.list).toHaveLength(1);

	act(() => {
		result.current.select(mockVoltorb);
	});

	expect(result.current.selected).toBe(mockVoltorb);
});


test('forbidden change the select a pokemon with a not fully loaded pokemon', () => {
  
	const { result } = setup();
	expect(result.current.list).toHaveLength(1);

	act(() => {
		result.current.select({ name: 'Voltorb', url: "url-test" });
	});

	expect(result.current.selected).toBe(false);
});



test('allows change the unselect',  () => {
  
	const { result } = setup();
	expect(result.current.list).toHaveLength(1);

	act(() => {
		result.current.select();
	});

  expect(result.current.selected).toBe(false)
});

