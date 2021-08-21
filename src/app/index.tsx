import * as React from 'react';
import classnames from 'classnames';
import { filter } from 'lodash';
import { AppCanvas, Divisor } from './app.styles';

import usePokeApi from '../hooks/usePokeApi';
import Display from './components/Display';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';
import usePokeDatabase from '../hooks/usePokeDatabase';

const App: React.FC = () => {
	const database = usePokeDatabase();
	const { start, fetchSpecies } = usePokeApi(database);
	const [selected, select] = React.useState(0);
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		start();
	}, []);

	return (
		<AppCanvas>
			<Header />
			<Search
				text={text}
				setText={setText}
				reset={() => {
					select(0);
				}}
			/>
			<Display
				selected={database.pokemonById(selected)}
				className={classnames({ selected })}
				list={filter(
					database.list,
					(e) => e.name.toString().indexOf(text) > -1
				)}
				select={(e) => {
					fetchSpecies(e);
					select(e.id);
				}}
			/>
			<Divisor />
			<Info selected={database.pokemonById(selected)} />
		</AppCanvas>
	);
};

export default App;
