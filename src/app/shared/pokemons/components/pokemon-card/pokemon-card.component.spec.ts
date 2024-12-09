/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter } from '@angular/router';
import { PokemonBase } from '../../interfaces/pokemon-base';
import e from 'express';

const mockPokemon: PokemonBase = {
  name: 'Guayomon',
  id: '8989'
}

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PokemonCardComponent ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    //seteamos el input algun valor para evitar errores ya que es required
    fixture.componentRef.setInput('pokemon', mockPokemon)

    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement

    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal value', () => {

    //el pokemon se carga correctamente al ser establecido como valor
    expect(component.pokemon()).toEqual(mockPokemon)
  });

  it('should render name and image correctly', () => {
    const expectedUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`

    //la imagen se carga correctamente con el mock pokemon
    expect(component.imagePoke).toBe(expectedUrl)

    const img = compiled.querySelector('img')!
    expect(img).toBeDefined
    expect(img.src).toBe(expectedUrl)

    //renderizado en html
    const namePokemon = compiled.querySelector('h2')!
    expect(namePokemon).toBeDefined
    expect(namePokemon.innerText.trim()).toBe(mockPokemon.name)
  });
});
