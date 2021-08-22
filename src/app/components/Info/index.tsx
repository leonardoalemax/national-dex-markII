import * as React from 'react';
import classNames from 'classnames';
import {
	InfoArea,
	PokeInfoTitle,
	PokeInfoWrapper,
	PokeInfoImageWrapper,
	PokeDescWrapper,
	PokeStatus,
	PokeType,
	PokeViewLeft,
	PokeViewRight,
	PokeView,
} from './styles';

import { Type } from '../../app.styles';
import { Pokemon } from '../../../interfaces/Pokemon';

interface InfoProps {
	selected?: Pokemon;
}

const Info: React.FC<InfoProps> = ({ selected }: InfoProps) => (
	<InfoArea className={classNames({ selected })}>
		<PokeInfoTitle>
			#{selected?.id} - {selected?.name}
		</PokeInfoTitle>
		<PokeView>
			<PokeViewLeft>
				<PokeInfoImageWrapper>
					<img alt="pokeview" src={selected?.sprites?.front_default} />
				</PokeInfoImageWrapper>

				<PokeType>
					{selected?.types?.map(({ type }) => (
						<Type className={type.name} key={type.name}>
							{type.name}
						</Type>
					))}
				</PokeType>
			</PokeViewLeft>
			<PokeViewRight>
				<PokeDescWrapper>
					{selected?.species &&
						selected?.species?.flavor_text_entries?.length > 0 &&
						selected?.species?.flavor_text_entries[0].flavor_text
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
			</PokeViewRight>
		</PokeView>
	</InfoArea>
);

export default Info;