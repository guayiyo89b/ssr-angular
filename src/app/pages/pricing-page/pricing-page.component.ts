import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title)
  private meta = inject(Meta)

  constructor() { }

  ngOnInit(): void {
    this.title.setTitle('Precios')
    this.meta.updateTag({ name: 'description', content: 'Este es la pagina de precios'})
    this.meta.updateTag({ name: 'og:title', content: 'Este es un about page'})
    this.meta.updateTag({ name: 'keywords', content: 'Guayo, pagina, precios'})
  }
}
