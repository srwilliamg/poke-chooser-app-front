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

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PokeFavoritesComponent,
    PokemonCardComponent,
    PokemonCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
