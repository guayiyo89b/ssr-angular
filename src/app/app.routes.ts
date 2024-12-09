import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokemon/page/:page',
        loadComponent: () => import('./pages/pokemon-list/pokemon-list.component')
    },
    {
        path: 'pokemon/:id',
        loadComponent: () => import('./shared/pokemons/components/pokemon-page/pokemon-page.component')
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact-page/contact-page.component')
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
