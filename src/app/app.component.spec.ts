import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let app: AppComponent
  let compiled: HTMLDivElement

  @Component({
    selector: 'app-navbar',
    standalone: true,
  })
  class MockNavBarComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([])
      ]
    }).overrideComponent(AppComponent, {
      add: {
        imports: [MockNavBarComponent]
      },
      remove: {
        //lo sustituimos por el mock
        imports: [NavbarComponent]
      }
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render the bnavbar and router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).toBeTruthy()
    expect(compiled.querySelector('app-navbar')).toBeTruthy()
  });


});
