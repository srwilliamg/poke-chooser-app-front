import { IPokemonModel } from './../pokemons/model/pokemon.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() photoUrl = "";
  @Input() name = "";
  @Input() pokemon: IPokemonModel = {
    photoUrl: "",
    name: ""
  };
  @Input() clickBehavior: (args: any) => void = () => { console.info('clicked') }
}
