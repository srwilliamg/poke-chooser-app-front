import { PokemonsReducer } from './pokemons/store/pokemon.reducer';
import { PokemonService } from './pokemons/service/pokemon.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { PokeFavoritesComponent } from './poke-favorites/poke-favorites.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCatalogueComponent } from './pokemon-catalogue/pokemon-catalogue.component';
import { PokemonCardListComponent } from './pokemon-card-list/pokemon-card-list.component';
import { CallApiService } from './api/call-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PokeFavoritesComponent,
    PokemonCardComponent,
    PokemonCatalogueComponent,
    PokemonCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      pokemons: PokemonsReducer
    }),
    NgbModule
  ],
  providers: [PokemonService, CallApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
