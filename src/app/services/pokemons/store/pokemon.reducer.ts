import { PokemonActions } from './pokemon.actions';
import { createReducer, on } from '@ngrx/store';
import { PokemonState } from './pokemon.state';

export const initialState: PokemonState = {
  favorites: [],
  pokemonList: [],
};

export const PokemonsReducer = createReducer(
  initialState,
  on(PokemonActions.addPokemon, (state, { pokemon }) => ({
    ...state,
    favorites: [...state.favorites, pokemon],
  })),
  on(PokemonActions.loadPokemons, (state) => ({
    ...state,
  })),
  on(PokemonActions.loadedPokemons, (state, { pokemonList }) => ({
    ...state,
    pokemonList,
  }))
);
