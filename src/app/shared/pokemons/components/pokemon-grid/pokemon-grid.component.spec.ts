/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonGridComponent } from './pokemon-grid.component';
import { PokemonBase } from '../../interfaces/pokemon-base';
import { provideRouter } from '@angular/router';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

const mockPokemonList: PokemonBase[] = [
  {
    name: 'Guayomon',
    id: '8989',
  },
  {
    name: 'Porcimon',
    id: '8977',
  },
  {
    name: 'Zapato',
    id: '8577',
  },
];

describe('PokemonGridComponent', () => {
  let component: PokemonGridComponent;
  let fixture: ComponentFixture<PokemonGridComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonGridComponent],
      imports: [PokemonGridComponent, PokemonCardComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonGridComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('pokeList', [])
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the pokemon list with 3 pokemon cards', () => {
    fixture.componentRef.setInput('pokeList', mockPokemonList)
    fixture.detectChanges();
    expect(compiled.querySelectorAll('app-pokemon-card').length).toBe(mockPokemonList.length)
  });

  it("should render the message 'No hay pokemons' if the pokeList array is empty", () => {
    fixture.componentRef.setInput('pokeList', [])
    fixture.detectChanges();
    expect(compiled.querySelector('div')?.textContent).toContain('No hay pokémons')
  });
});
