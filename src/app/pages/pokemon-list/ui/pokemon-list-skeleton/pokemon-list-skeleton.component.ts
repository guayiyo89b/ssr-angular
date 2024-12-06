import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list-skeleton.component.html',
  styleUrls: ['./pokemon-list-skeleton.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
