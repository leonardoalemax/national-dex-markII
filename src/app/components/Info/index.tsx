import * as React from 'react';
import Eevee from '../../images/eevee.png';
import {
	InfoArea,
	PokeInfoTitle,
	PokeInfoWrapper,
	PokeInfoImageWrapper,
	PokeDescWrapper,
	PokeStatus,
	PokeType,
} from './styles';

import { Type } from '../../app.styles';

const Info: React.FC = () => (
	<InfoArea>
		<PokeInfoTitle>#133 - Eevee</PokeInfoTitle>
		<PokeInfoImageWrapper>
			<img alt="pokeview" src={Eevee} />
		</PokeInfoImageWrapper>

		<PokeType>
			<Type>type</Type>
		</PokeType>

		<PokeDescWrapper>
			The question of why only Eevee has such unstable genes has still not been
			solved.
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
