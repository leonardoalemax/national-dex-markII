import * as React from "react";
import Bolt from "../../images/bolt.svg";

import { SearchArea, DisplayInput, PokeButton } from "./styles";

const Search: React.FC = () => {
	return (
		<SearchArea>
			<DisplayInput />
			<PokeButton>
				<img src={Bolt} alt='go' />
			</PokeButton>
		</SearchArea>
	);
};

export default Search;
