import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
