import * as React from 'react';
import { filter } from 'lodash';
import { AppCanvas, Divisor } from './app.styles';

import usePokeApi from '../hooks/PokeApi';
import Display from './components/Display';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';

const App: React.FC = () => {
	const {
		getAll,
		pokeList,
		selectedSpecies,
		selected,
		select,
		selectSpecies,
		getSpecies,
	} = usePokeApi();
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		getAll();
	}, []);

	return (
		<AppCanvas>
			<Header />
			<Search text={text} setText={setText} />
			<Display
				selected={selected}
				list={filter(pokeList, (e) => e.name.toString().indexOf(text) > -1)}
				select={(p) => {
					select(p);
					selectSpecies(undefined);
					getSpecies(p.species.url);
				}}
			/>
			<Divisor />
			{selected && <Info selected={selected} species={selectedSpecies} />}
		</AppCanvas>
	);
};

export default App;
