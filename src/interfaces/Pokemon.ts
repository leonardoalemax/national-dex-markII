import { PokemonSpecies } from './PokemonSpecies';
import { PokemonStats } from './PokemonStats';
import { PokemonTypes } from './PokemonTypes';

export interface Pokemon {
	name: string;
	id?: number;
	url?: string;
	species?: PokemonSpecies;
	types?: PokemonTypes[];
  stats?: PokemonStats[]
	sprites?: {
		front_default: string;
	};
}
