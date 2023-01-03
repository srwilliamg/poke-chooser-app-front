import { IPokemonModel } from './../pokemons/model/pokemon.model';
import { PokemonService } from './../pokemons/service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { map, take, toArray, of, from, switchMap, mergeMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {
  public pokemons: IPokemonModel[] = []
  constructor(private pokemonService: PokemonService) {
    console.log("🚀 ~ file: pokemon-catalogue.component.ts:12 ~ PokemonCatalogueComponent ~ constructor ~ pokemonService", pokemonService)
  }
  ngOnInit(): void {
    this.pokemonService.getApiPokemons<{
      results: IPokemonModel[]
    }>().subscribe((response) => {
      const { results } = response;
      from(results).pipe(mergeMap((x, index) => {
        console.log("🚀 ~ file: pokemon-catalogue.component.ts:22 ~ PokemonCatalogueComponent ~ from ~ x", x)
        return this.pokemonService.getApiPokemonDescription<{
          id: number;
          name: string;
          sprites: {
            other: {
              dream_world: {
                front_default: string;
              }
            }
          }
        }>("/" + (index + 1))
      }), map((response) => {
        console.log("🚀 ~ file: pokemon-catalogue.component.ts:34 ~ PokemonCatalogueComponent ~ .subscribe ~ response", response)
        const { name, sprites: { other: { dream_world: { front_default } } } } = response;

        return {
          name,
          photoUrl: front_default
        } as IPokemonModel;
      }), toArray()).subscribe(x => {
        this.pokemons = x;
      });

    });
  }

  /**
   * addPokemon
   */
  public addPokemon() {
    return (pokemon: IPokemonModel) => {
      this.pokemonService.addFavoritePokemon(pokemon)
    }
  }
}
