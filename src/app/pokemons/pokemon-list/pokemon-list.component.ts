import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';
import { Pagination, Pokemon } from '@shared/models/pokemon.model';
import { LoadingState } from '@shared/state/loading.state';
import { PokemonState } from '@shared/state/pokemon.state';
import { Observable } from 'rxjs';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {
  setPaginator,
  setSearchParams,
} from '@shared/actions/search-params.actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, PokemonComponent, AsyncPipe, MatPaginatorModule],
})
export class PokemonListComponent implements OnInit {
  @Select(PokemonState.getCardsList) pokemons$!: Observable<Pokemon[]>;
  @Select(PokemonState.getCardsListPagination)
  pagination$!: Observable<Pagination>;
  @Select(LoadingState.getStatus) loadingStatus$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new getPokemonList());
  }

  handlePageEvent(e: PageEvent) {
    this.store.dispatch(
      new setPaginator({
        pageSize: e.pageSize.toString(),
        page: (e.pageIndex + 1).toString(),
      })
    );
  }
}
