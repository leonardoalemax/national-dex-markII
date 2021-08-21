import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';

import { allRequest, getSpecies, getPokemon } from '../../api/pokeApi';

jest.mock('axios');

const setup = ({ subject }: any) =>
	render(
		<button
			onClick={() => {
				subject();
			}}
		>
			test
		</button>
	);

test('allow to allRequest', async () => {
	(axios as any).get.mockImplementation(() => Promise.resolve({ data: {} }));

	setup({ subject: allRequest });

	fireEvent.click(screen.getByText('test'));

	await waitFor(() => {
		expect(axios.get).toBeCalledWith(
			'https://pokeapi.co/api/v2/pokemon/?limit=151'
		);
	});
});

test('allow to getSpecies', async () => {
	(axios as any).get.mockImplementation(() => Promise.resolve({ data: {} }));

	setup({
		subject: () => {
			getSpecies('test-url');
		},
	});

	fireEvent.click(screen.getByText('test'));

	await waitFor(() => {
		expect(axios.get).toBeCalledWith('test-url');
	});
});

test('allow to getPokemon ', async () => {
	(axios as any).get.mockImplementation(() => Promise.resolve({ data: {} }));

	setup({
		subject: () => {
			getPokemon({ name: 'test-name' });
		},
	});

	fireEvent.click(screen.getByText('test'));

	await waitFor(() => {
		expect(axios.get).toBeCalledWith(
			'https://pokeapi.co/api/v2/pokemon/test-name'
		);
	});
});
