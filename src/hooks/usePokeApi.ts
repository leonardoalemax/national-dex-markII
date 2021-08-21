
import axios, { AxiosPromise, AxiosResponse} from "axios";

import * as React from 'react';
import {useAsyncFn} from 'react-use';
import { PokeDatabasePokemon, usePokeDatabaseType } from "./usePokeDatabase";


export interface PokeApiPokemonSpecies {
  base_happiness: string;
  url: string;
  flavor_text_entries: {
    flavor_text: string;
  }[];
}

export interface PokeApiPokeList {
  name: string;
  url: string;
}

export interface PokeApiSearchResult {
  results?: PokeApiPokeList[];
}


const usePokeApi = (database: usePokeDatabaseType) => {
  const base = "https://pokeapi.co/api/v2";


  const get = (url: string): AxiosPromise<any[]>  => axios.get(url);
  const species = (url: string): AxiosPromise<PokeApiPokemonSpecies>  => axios.get(url);
  const fetch = (url: string): AxiosPromise<PokeDatabasePokemon>  => axios.get(url);
  const allRequest = () => get(`${base}/pokemon/?limit=151`);

  const [allResult, start] = useAsyncFn(allRequest);

  const fetchList = async (list:PokeApiPokeList[]) => {
    list.forEach(async (pokemon:PokeApiPokeList) => {
      const {data: p} = await fetch(`${base}/pokemon/${pokemon.name}`);
      const {data: specie} = await species(p.species.url);
      
      database.addPokemon(p);
      database.addSpecies(p.id, specie);
    });
  }



  React.useEffect(() => {
    const {loading , value } = allResult;
    if(loading) return;

    if(value) {
      const {data} = value as AxiosResponse<PokeApiSearchResult>;
      if(data) fetchList(data?.results || []);
    };

	}, [allResult]);

  return {
    start
  }
};

export default usePokeApi;