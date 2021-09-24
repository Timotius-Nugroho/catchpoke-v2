import {GET_ALL_POKEMONS, GET_POKEMON} from './query'

interface PokemonsChild {
  name: string,
  image: string,
  artwork: string
}

interface Pokemons {
  nextOffset: number,
  results: Array<PokemonsChild>
}

export const getAllPokemons = async (limit:number, offset:number): Promise<Pokemons> => {
  const data = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_ALL_POKEMONS,
      variables: {
        limit,
        offset,
      },
    }),
    method: "POST",
  });

  if (!data.ok) {
    const message = `An error has occured: ${data.status}`;
    throw new Error(message);
  }

  const result = await data.json();
  return result.data.pokemons;
}

export const getPokemon = async (name: string | null) => {
  const data = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_POKEMON,
      variables: {
        name,
      },
    }),
    method: "POST",
  });

  if (!data.ok) {
    const message = `An error has occured: ${data.status}`;
    throw new Error(message);
  }

  const result = await data.json();
  const newResult = {
    stats: result.data.pokemon.stats.map((e: any) => {return {stat: e.stat.name, base: e.base_stat}}),
    moves: result.data.pokemon.moves.map((e: any) => e.move.name),
    types: result.data.pokemon.types.map((e: any) => e.type.name)
  }
  return newResult;
}