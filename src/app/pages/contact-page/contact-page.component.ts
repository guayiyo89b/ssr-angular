import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)

  constructor() { }

  ngOnInit(): void {
    this.title.setTitle('Contacto')
    this.meta.updateTag({ name: 'description', content: 'Este es la pagina de contacto'})
    this.meta.updateTag({ name: 'og:title', content: 'Este es un about page'})
    this.meta.updateTag({ name: 'keywords', content: 'Guayo, pagina, contacto'})
  }

}
