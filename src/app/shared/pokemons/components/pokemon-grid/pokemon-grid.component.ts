import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonBase } from '../../interfaces/pokemon-base';

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonGridComponent implements OnInit {
  pokeList = input.required<PokemonBase[]>()

  ngOnInit() {
  }

}
