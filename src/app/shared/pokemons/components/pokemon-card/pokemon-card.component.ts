import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { PokemonBase } from '../../interfaces/pokemon-base';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
  pokemon = input.required<PokemonBase>()
  imagePoke = ''

  ngOnInit() {
    this.imagePoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
  }

}
