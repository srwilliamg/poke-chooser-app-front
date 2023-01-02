import { PokemonActions } from './pokemon.actions';
import { createReducer, on } from "@ngrx/store";
import { PokemonState } from './pokemon.state';

export const initialState: PokemonState = {
  favorites: []
};

export const PokemonsReducer = createReducer(
  initialState,
  on(PokemonActions.addPokemon, (state, { pokemon }) => ({
    ...state,
    favorites: [...state.favorites, pokemon]
  }))
);

