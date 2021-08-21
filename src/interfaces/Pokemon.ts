import { PokemonSpecies } from './PokemonSpecies';
import { PokemonTypes } from './PokemonTypes';

export interface Pokemon {
	name: string;
	id?: number;
	url?: string;
	species?: PokemonSpecies;
	types?: PokemonTypes[];
	sprites?: {
		front_default: string;
	};
}
