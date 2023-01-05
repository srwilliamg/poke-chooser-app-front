import { IPokemonModel } from './../model/pokemon.model';
export interface PokemonState {
  favorites: IPokemonModel[],
  pokemonList: IPokemonModel[]
}
