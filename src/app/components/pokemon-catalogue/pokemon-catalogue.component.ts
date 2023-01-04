import { IPokemonModel } from './../../services/pokemons/model/pokemon.model';
import { PokemonService } from './../../services/pokemons/service/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {
  public pokemons: IPokemonModel[] = []

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonsAndDetails().subscribe(res => {
      this.pokemons = res
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
