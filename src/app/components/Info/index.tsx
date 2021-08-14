import * as React from 'react';
import {
	InfoArea,
	PokeInfoTitle,
	PokeInfoWrapper,
	PokeInfoImageWrapper,
	PokeDescWrapper,
	PokeStatus,
	PokeType,
} from './styles';

import { PokeApiPokemon, PokeApiPokemonSpecies } from '../../../hooks/PokeApi';

import { Type } from '../../app.styles';

interface InfoProps {
	selected: PokeApiPokemon;
	species?: PokeApiPokemonSpecies | undefined;
}

const Info: React.FC<InfoProps> = ({ selected, species }: InfoProps) => (
	<InfoArea>
		<PokeInfoTitle>
			#{selected.id} - {selected.name}
		</PokeInfoTitle>
		<PokeInfoImageWrapper>
			<img alt="pokeview" src={selected.sprites.front_default} />
		</PokeInfoImageWrapper>

		<PokeType>
			{selected.types.map(({ type }) => (
				<Type className={type.name} key={type.name}>
					{type.name}
				</Type>
			))}
		</PokeType>

		<PokeDescWrapper>
			{species?.flavor_text_entries[0].flavor_text
				.replace('\n', ' ')
				.replace('\f', ' ')}
		</PokeDescWrapper>
		<PokeInfoWrapper>
			<PokeStatus>
				speed: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				special-defense: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				special-attack: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				defense: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				attack: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				hp: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				Height: <span>55</span>
			</PokeStatus>
			<PokeStatus>
				Weight: <span>55</span>
			</PokeStatus>
		</PokeInfoWrapper>
	</InfoArea>
);

export default Info;
