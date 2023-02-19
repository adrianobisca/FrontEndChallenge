import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { PokemonDetail, PokemonList } from '@shared/models/pokemon.model';
import { Observable } from 'rxjs';

export interface requestOptions {
  page?: string;
  pageSize?: string;
  orderType?: string;
  name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  constructor(private httpClient: HttpClient) { }

  getList(options: requestOptions): Observable<PokemonList> {
    const p = options.page ? `?page=${options.page}` : '';
    const ps = options.pageSize ? `?pageSize=${options.pageSize}` : '';
    const o = options.orderType ? `&orderBy=${options.orderType}` : '';
    const n = options.name ? `&q=name:${options.name}*` : '';
    const FORMATED_URL = `${environment.apiUrl}cards${p}${ps}${o}${n}`;
    return this.httpClient.get<PokemonList>(FORMATED_URL);
  }

  getCardDetail(pokemonId: string): Observable<PokemonDetail> {
    const FORMATED_URL = `${environment.apiUrl}cards/${pokemonId}`;
    return this.httpClient.get<PokemonDetail>(FORMATED_URL);
  }
}
