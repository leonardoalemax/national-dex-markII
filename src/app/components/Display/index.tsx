import * as React from 'react';
import {
	DisplayArea,
	PokeItem,
	PokeNumber,
	PokeType,
	PokeName,
} from './styles';

const Display: React.FC = () => (
	<DisplayArea>
		<PokeItem>
			<PokeNumber>#9999</PokeNumber>
			<PokeName>Eevee</PokeName>
			<PokeType>Normal</PokeType>
		</PokeItem>
	</DisplayArea>
);

export default Display;
