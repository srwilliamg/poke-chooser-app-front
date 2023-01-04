/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPokemonModel } from './../../services/pokemons/model/pokemon.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.css']
})
export class PokemonCardListComponent {
  @Input() pokemonsToShow: IPokemonModel[] | null = []
  @Input() clickBehavior: ((...args: any[]) => void) | null = null
}
