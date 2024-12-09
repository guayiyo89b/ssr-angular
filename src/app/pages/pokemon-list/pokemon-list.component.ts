import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { PokemonGridComponent } from '../../shared/pokemons/components/pokemon-grid/pokemon-grid.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonService } from '../../shared/pokemons/services/pokemon.service';
import { PokemonBase } from '../../shared/pokemons/interfaces/pokemon-base';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonGridComponent, PokemonListSkeletonComponent, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonListComponent {
  isLoading = signal(true);
  pokemons = signal<PokemonBase[]>([]);
  private pokeService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title)

  currentPage = toSignal<number>(
    this.route.params.pipe(
      map((params) => params['page'] ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );

  //efecto para el cambio de pagina
  //el efecto esta a la escucha de cualquier cambio de valor
  loadOnPageChanged = effect(() => {
    this.loadPokemons(this.currentPage())
  },
  {
    //para permitir cambio del valor de la signal en el efecto
    allowSignalWrites: true
  }
)

  loadPokemons(nextPage = 0) {
    const pageToLoad = this.currentPage()! + nextPage;

    this.pokeService
      .loadPage(pageToLoad)
      .pipe(
        // tap(() =>
        //   this.router.navigate([], { queryParams: { page: pageToLoad } })
        // ),
        tap( () => {
          this.title.setTitle(`Pokemon - Page: ${this.currentPage()} `)
        })
      )
      .subscribe((pokemons) => this.pokemons.set(pokemons));
  }
}
