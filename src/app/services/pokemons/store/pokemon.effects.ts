import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PokemonService } from '../service/pokemon.service';
import { PokemonActions } from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      mergeMap(() =>
        this.pokemonService.getPokemonsAndDetails().pipe(
          map((pokemonList) => PokemonActions.loadedPokemons({ pokemonList })),
          catchError((error) => {
            console.error('ERROR IN EFFECT', error);
            return EMPTY;
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
