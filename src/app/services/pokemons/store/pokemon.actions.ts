import { IPokemonModel } from './../model/pokemon.model';
import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const PokemonActions = createActionGroup({
  source: 'pokemon-catalogue',
  events: {
    'Add pokemon': props<{ pokemon: IPokemonModel }>(),
    'load pokemons': emptyProps,
    'loaded pokemons': props<{ pokemonList: IPokemonModel[] }>(),
  },
});
