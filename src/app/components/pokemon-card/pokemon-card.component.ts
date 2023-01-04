/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPokemonModel } from './../../services/pokemons/model/pokemon.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: IPokemonModel = {
    photoUrl: "",
    name: ""
  };
  @Input() clickBehavior: ((...args: any) => void) | null = () => { console.info('clicked') }
}
