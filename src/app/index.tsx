import * as React from 'react';
import classnames from 'classnames';
import { AppCanvas, Divisor } from './app.styles';

import Display from './components/Display';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';
import usePokeState from '../hooks/usePokeState';

const App: React.FC = () => {
	const { text, selected, list, setText, select } = usePokeState();

	return (
		<AppCanvas>
			<Header />
			<Search text={text} setText={setText} reset={select} />
			<Display
				selected={selected}
				className={classnames({ selected })}
				list={list}
				select={select}
			/>
			<Divisor />
			<Info selected={selected} />
		</AppCanvas>
	);
};

export default App;
