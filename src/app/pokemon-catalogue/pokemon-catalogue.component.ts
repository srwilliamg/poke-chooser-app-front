import { IPokemonModel } from './../pokemons/model/pokemon.model';
import { PokemonService } from './../pokemons/service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

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
    }>()
      .pipe(map(({ results }) => results))
      .pipe(map((result, index) => {
        console.log("🚀 ~ file: pokemon-catalogue.component.ts:22 ~ PokemonCatalogueComponent ~ .pipe ~ result", result)

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
        }>("/" + index)
      }))
      .subscribe((response) => {
        console.log("🚀 ~ file: pokemon-catalogue.component.ts:23 ~ PokemonCatalogueComponent ~ .subscribe ~ response", response)
        // const { results } = response;
        // this.pokemons = results;
      })
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
