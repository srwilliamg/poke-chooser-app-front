import { CallApiService } from './../../api/call-api.service';
import { PokemonActions } from './../store/pokemon.actions';
import { IPokemonModel } from './../model/pokemon.model';
import { PokemonState } from './../store/pokemon.state';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { getState, selectPokemonFavorites } from '../store/pokemon.selector';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private store: Store<{ state: PokemonState }>, private callApiService: CallApiService) { }

  /**
   * getState
   */
  public getState(): Observable<PokemonState> {
    return this.store.select(getState)
  }

  /**
   * getFavoritePokemons
   */
  public getFavoritePokemons(): Observable<IPokemonModel[]> {
    return this.store.select(selectPokemonFavorites)
  }

  /**
   * addFavoritePokemon
   */
  public addFavoritePokemon(pokemon: IPokemonModel) {
    console.info('Adding a pokemon to the state', pokemon)
    this.store.dispatch(PokemonActions.addPokemon({ pokemon }));
  }

  /**
   * getApiPokemons
   */
  public getApiPokemons<T>() {
    return this.callApiService.callApi<T>({ method: "GET", url: "/" }, { params: { limit: 15 } });
  }

  public getApiPokemonDescription<T>(url: string) {
    return this.callApiService.callApi<T>({ method: "GET", url }, {});
  }
}
