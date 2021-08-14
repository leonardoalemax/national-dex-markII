import * as React from 'react';
import Bolt from '../../images/bolt.svg';

import { SearchArea, DisplayInput, PokeButton } from './styles';

interface SearchProps {
	text: string;
	setText: (e: string) => void;
}

const Search: React.FC<SearchProps> = ({ text, setText }: SearchProps) => (
	<SearchArea>
		<DisplayInput
			type="text"
			value={text}
			onChange={(e) => setText(e.target.value)}
		/>
		<PokeButton>
			<img src={Bolt} alt="go" />
		</PokeButton>
	</SearchArea>
);

export default Search;
