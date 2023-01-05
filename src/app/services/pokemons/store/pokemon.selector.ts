import { PokemonState } from './pokemon.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const stateKey = 'pokemons';

export const getState = createFeatureSelector<PokemonState>(stateKey);

export const selectPokemonFavorites = createSelector(
  getState,
  (state: PokemonState) => state.favorites
);

export const selectPokemonList = createSelector(
  getState,
  (state: PokemonState) => state.pokemonList
);
