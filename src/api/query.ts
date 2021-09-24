export const GET_ALL_POKEMONS = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    nextOffset
    results {
      name
      image
      artwork
    }
  }
}`

export const GET_POKEMON = `query pokemon($name: String!) {
  pokemon(name: $name) {
    stats {
      base_stat
      stat {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}`;