import axios, { AxiosPromise } from 'axios';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonSpecies } from '../interfaces/PokemonSpecies';

const base = 'https://pokeapi.co/api/v2';

export const getPokemon = (pokemon: Pokemon): AxiosPromise<Pokemon> =>
	axios.get(`${base}/pokemon/${pokemon.name}`);

export const getSpecies = (url: string): AxiosPromise<PokemonSpecies> =>
	axios.get(url);

export const allRequest = () => axios.get(`${base}/pokemon/?limit=151`);
