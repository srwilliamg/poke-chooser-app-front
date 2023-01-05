import { PokemonService } from '../../services/pokemons/service/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-favorites',
  templateUrl: './poke-favorites.component.html',
  styleUrls: ['./poke-favorites.component.css'],
})
export class PokeFavoritesComponent implements OnInit {
  public favoritePokemons$;

  constructor(private pokemonService: PokemonService) {
    this.favoritePokemons$ = pokemonService.getFavoritePokemons();
  }

  ngOnInit(): void {
    console.info('created favorites');
  }
}
