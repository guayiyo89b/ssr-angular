import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonBase } from '../interfaces/pokemon-base';
import { PokeapiResponse } from '../interfaces/pokeapi-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  loadPage(page: number): Observable<PokemonBase[]> {
    if (page !== 0) {
      --page;
    }
    page = Math.max(0, page);
    return this.http
      .get<PokeapiResponse>(
        `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
      )
      .pipe(
        map((res) => {
          const simplePokemons: PokemonBase[] = res.results.map((pokemon) => ({
            id: pokemon.url.split('/').at(-2) ?? '',
            name: pokemon.name,
          }));

          return simplePokemons;
        })

      );
  }

  loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}
