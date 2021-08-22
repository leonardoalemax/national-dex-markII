import { PokemonFlavorEntry } from "./PokemonFlavorEntry";

export interface PokemonSpecies {
	base_happiness: string;
	url: string;
	flavor_text_entries?: PokemonFlavorEntry[];
}
