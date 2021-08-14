
import axios, { AxiosPromise, AxiosResponse} from "axios";
import { orderBy } from 'lodash';

import * as React from 'react';
import {useAsyncFn} from 'react-use';

export interface PokeApiPokemon {
  name: string;
  id: number;
  species: {
    url: string;
  },
  types: {
    slot: number;
    type: { 
      name: string;
    }
  }[]
  sprites: {
    front_default: string;
  }
}

export interface PokeApiPokemonSpecies {
  base_happiness: string;
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


const usePokeApi = () => {
  const base = "https://pokeapi.co/api/v2";

  const [pokeList, setPokeList] = React.useState<PokeApiPokemon[]>([]);
  const [selectedSpecies, selectSpecies] = React.useState<PokeApiPokemonSpecies>();
	const [selected, select] = React.useState<PokeApiPokemon>();

  const get = (url: string): AxiosPromise<any[]>  => axios.get(url);
  const species = (url: string): AxiosPromise<PokeApiPokemonSpecies>  => axios.get(url);
  const fetch = (url: string): AxiosPromise<PokeApiPokemon>  => axios.get(url);
  const allRequest = () => get(`${base}/pokemon/?limit=151`);

  const [allResult, getAll] = useAsyncFn(allRequest);
  const [speciesResult, getSpecies] = useAsyncFn(species);

  const fetchList = async (list:PokeApiPokeList[]) => {
    list.forEach(async (pokemon:PokeApiPokeList) => {
      const {data} = await fetch(`${base}/pokemon/${pokemon.name}`);
      
      setPokeList(e => 
        orderBy(([
          ...e.filter(p => p.id !== data.id),
          data
        ]), ['id', ['desc']]) 
      );
    });
  }

  React.useEffect(() => {
		if (pokeList.length > 1) return;

    if (pokeList.length === 1) {
      selectSpecies(undefined);
      getSpecies(pokeList[0].species.url);
      select(pokeList[0])
    }
	}, [pokeList]);

  React.useEffect(() => {
		if (speciesResult.loading) return;

		if (speciesResult?.value?.data) selectSpecies(speciesResult?.value?.data);
	}, [speciesResult]);

  React.useEffect(() => {
    const {loading , value } = allResult ;
    if(loading) return;

    if(value) {
      const {data} = value as AxiosResponse<PokeApiSearchResult>;
      if(data) fetchList(data?.results || []);
    };

	}, [allResult]);

  return {
    pokeList,
    speciesResult,
    selectedSpecies,
    selectSpecies,
    selected,
    select,
    fetch,
    getAll,
    getSpecies
  }
};

export default usePokeApi;