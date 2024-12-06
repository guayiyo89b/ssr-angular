import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-base';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  public pokemon = signal<Pokemon | null>(null);
  private pokeService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.pokeService
      .loadPokemon(id)
      .pipe(
        tap(({name,id}) => {
          const pageTitle = `#${id} - ${name}`
          this.title.setTitle(pageTitle)
          this.meta.updateTag({
            name: 'description',
            content: `Pagina de Pokemon ${name}`
          })
          this.meta.updateTag({
            name: 'og:title',
            content: pageTitle
          })
          this.meta.updateTag({
            name: 'og:description',
            content: `Pagina de Pokemon ${name}`
          })
          this.meta.updateTag({
            name: 'og:image',
            content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          })
        })
      )
      .subscribe((poke) => this.pokemon.set(poke));
  }
}
