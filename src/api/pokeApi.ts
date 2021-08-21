import axios, { AxiosPromise } from 'axios';
import { PokeApiPokemonSpecies } from '../hooks/usePokeApi';
import { PokeDatabasePokemon } from '../hooks/usePokeDatabase';

const base = 'https://pokeapi.co/api/v2';

export const getPokemon = (
	pokemon: PokeDatabasePokemon
): AxiosPromise<PokeDatabasePokemon> =>
	axios.get(`${base}/pokemon/${pokemon.name}`);

export const getSpecies = (url: string): AxiosPromise<PokeApiPokemonSpecies> =>
	axios.get(url);

export const allRequest = () => axios.get(`${base}/pokemon/?limit=151`);
