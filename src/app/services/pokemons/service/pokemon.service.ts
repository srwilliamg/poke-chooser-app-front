import { CallApiService } from './../../../api/call-api.service';
import { PokemonActions } from './../store/pokemon.actions';
import { IPokemonModel } from './../model/pokemon.model';
import { PokemonState } from './../store/pokemon.state';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, switchMap, toArray } from 'rxjs';
import {
  getState,
  selectPokemonFavorites,
  selectPokemonList,
} from '../store/pokemon.selector';
import { Store } from '@ngrx/store';

export interface IPokemonListItem {
  name: string;
  url: string;
}
export interface IPokemonListResponse {
  results: IPokemonListItem[];
}
export interface IPokemonDetail {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(
    private store: Store<{ state: PokemonState }>,
    private callApiService: CallApiService
  ) {}

  /**
   * getState
   */
  public getState(): Observable<PokemonState> {
    return this.store.select(getState);
  }

  /**
   * getFavoritePokemons
   */
  public getFavoritePokemons(): Observable<IPokemonModel[]> {
    return this.store.select(selectPokemonFavorites);
  }

  /**
   * getPokemonList
   */
  public getPokemonList(): Observable<IPokemonModel[]> {
    return this.store.select(selectPokemonList);
  }

  /**
   * addFavoritePokemon
   */
  public addFavoritePokemon(pokemon: IPokemonModel) {
    console.info('Adding a pokemon to the state', pokemon);
    this.store.dispatch(PokemonActions.addPokemon({ pokemon }));
  }

  /**
   * loadPokemonList
   */
  public loadPokemonList() {
    console.info('loading pokemon list');
    this.store.dispatch(PokemonActions.loadPokemons());
  }

  /**
   * getApiPokemons
   */
  public getApiPokemons() {
    return this.callApiService.callApi<IPokemonListResponse>(
      { method: 'GET', url: '/' },
      { params: { limit: 15 } }
    );
  }

  public getApiPokemonDescription(url: string) {
    return this.callApiService.callApi<IPokemonDetail>(
      { method: 'GET', url },
      {}
    );
  }

  /**
   * getPokemonsAndDetails
   */
  public getPokemonsAndDetails() {
    return this.getApiPokemons().pipe(
      switchMap((r) => r.results),
      mergeMap(this.getPokemonDetails),
      map(this.getPokemonPhotoAndName),
      toArray()
    );
  }

  private getPokemonPhotoAndName = (response: IPokemonDetail) => {
    const {
      name,
      sprites: {
        other: {
          dream_world: { front_default },
        },
      },
    } = response;

    return {
      name,
      photoUrl: front_default,
    } as IPokemonModel;
  };

  private getPokemonDetails = ({ url: pokemonUrl }: IPokemonListItem) => {
    const [pokemonId] = pokemonUrl.split('/').filter((x) => Boolean(+x));
    return this.getApiPokemonDescription(`/${pokemonId}`);
  };
}
