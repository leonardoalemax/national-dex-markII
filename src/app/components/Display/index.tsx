import * as React from 'react';
import {
	DisplayArea,
	PokeItem,
	PokeNumber,
	PokeType,
	PokeName,
} from './styles';

import { PokeApiPokemon } from '../../../hooks/PokeApi';

interface DisplayProps {
	list: PokeApiPokemon[];
	selected?: PokeApiPokemon;
	select: (e: PokeApiPokemon) => void;
}

const Display: React.FC<DisplayProps> = ({
	list,
	selected,
	select,
}: DisplayProps) => (
	<DisplayArea>
		{list.map((pokemon: PokeApiPokemon) => {
			const { id, name, sprites, types } = pokemon;
			return (
				<PokeItem
					key={id}
					className={selected?.name === pokemon.name ? 'selected' : ''}
					onClick={() => {
						select(pokemon);
					}}
				>
					<PokeNumber>#{id}</PokeNumber>
					<img alt="sprit" src={sprites.front_default} />
					<PokeName>{name}</PokeName>
					<PokeType className={types[0].type.name}>
						{types[0].type.name}
					</PokeType>
				</PokeItem>
			);
		})}
	</DisplayArea>
);

export default Display;
