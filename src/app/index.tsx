import * as React from 'react';
import classnames from 'classnames';
import { filter } from 'lodash';
import { AppCanvas, Divisor } from './app.styles';

import usePokeApi from '../hooks/usePokeApi';
import Display from './components/Display';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';
import usePokeDatabase, { PokeDatabasePokemon } from '../hooks/usePokeDatabase';

const App: React.FC = () => {
	const database = usePokeDatabase();
	const { start } = usePokeApi(database);
	const [selected, select] = React.useState<PokeDatabasePokemon>();

	const [text, setText] = React.useState('');

	React.useEffect(() => {
		start();
	}, []);

	return (
		<AppCanvas>
			<Header />
			<Search text={text} setText={setText} />
			<Display
				selected={selected}
				className={classnames({ selected })}
				list={filter(
					database.list,
					(e) => e.name.toString().indexOf(text) > -1
				)}
				select={select}
			/>
			<Divisor />
			<Info selected={selected} />
		</AppCanvas>
	);
};

export default App;
