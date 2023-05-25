import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonDetailComponent } from '@pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from '@pokemons/pokemon-list/pokemon-list.component';
import { PokemonComponent } from '@pokemons/pokemon/pokemon.component';
import { WannaBeModalModule } from '@shared/components/wanna-be-modal/wanna-be-modal.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  imports: [CommonModule, WannaBeModalModule, NgOptimizedImage],
  exports: [PokemonComponent, PokemonListComponent, PokemonDetailComponent],
})
export class PokemonsModule {}
