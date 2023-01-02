import { IPokemonModel } from './../model/pokemon.model';
import { createActionGroup, props } from "@ngrx/store";

export const PokemonActions = createActionGroup({
  source: 'pokemon-catalogue',
  events: {
    'Add pokemon': props<{ pokemon: IPokemonModel }>(),
  },
});
