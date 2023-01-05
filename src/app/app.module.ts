import { PokemonsReducer } from './services/pokemons/store/pokemon.reducer';
import { PokemonService } from './services/pokemons/service/pokemon.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { PokeFavoritesComponent } from './components/poke-favorites/poke-favorites.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonCardListComponent } from './components/pokemon-card-list/pokemon-card-list.component';
import { CallApiService } from './api/call-api.service';
import { HomeComponent } from './screens/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './services/pokemons/store/pokemon.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PokeFavoritesComponent,
    PokemonCardComponent,
    PokemonCatalogueComponent,
    PokemonCardListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      pokemons: PokemonsReducer,
    }),
    NgbModule,
    EffectsModule.forRoot([PokemonEffects]),
  ],
  providers: [PokemonService, CallApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
