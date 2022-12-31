import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-favorites',
  templateUrl: './poke-favorites.component.html',
  styleUrls: ['./poke-favorites.component.css']
})
export class PokeFavoritesComponent {
  public pokemons = [{
    name: "bulbasaur",
    photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  },
  {
    name: "ivysaur",
    photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
  }
    ,
  {
    name: "ivysaur",
    photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
  }
    ,
  {
    name: "ivysaur",
    photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
  },
  {
    name: "ivysaur",
    photoUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
  },

  ]
}
