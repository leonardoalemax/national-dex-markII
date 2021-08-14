import * as React from 'react';
import { AppCanvas, Divisor } from './app.styles';

import Display from './components/Display';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';

const App: React.FC = () => (
	<AppCanvas>
		<Header />
		<Search />
		<Display />
		<Divisor />
		<Info />
	</AppCanvas>
);

export default App;
