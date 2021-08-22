import * as React from 'react';
import classNames from 'classnames';
import {
	DisplayArea,
	PokeItem,
	PokeNumber,
	PokeType,
	PokeName,
} from './styles';
import { Pokemon } from '../../../interfaces/Pokemon';

interface DisplayProps {
	list: Pokemon[];
	className: string;
	selected?: Pokemon | false;
	select: (e: Pokemon) => void;
}

const Display: React.FC<DisplayProps> = ({
	list,
	selected,
	select,
	className,
}: DisplayProps) => (
	<DisplayArea className={className}>
		{list.map((pokemon: Pokemon) => {
			const { id, name, sprites, types = [] } = pokemon;
			return (
				<PokeItem
					key={id || name}
					className={classNames({
						selected: selected && selected?.name === pokemon.name,
					})}
					onClick={() => {
						select(pokemon);
					}}
				>
					<PokeNumber>#{id}</PokeNumber>
					<img alt="sprit" src={sprites?.front_default} />
					<PokeName>{name}</PokeName>
					{types[0] && (
						<PokeType className={types[0].type.name}>
							{types[0].type.name}
						</PokeType>
					)}
				</PokeItem>
			);
		})}
	</DisplayArea>
);

export default Display;
