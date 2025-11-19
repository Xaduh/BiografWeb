import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { FilmAdministation } from './film-administation/film-administation';

export const routes: Routes = [
    { 
        path: '', 
        component: Home, 
        title: 'Forside' 
    },
    { 
        path: 'film-administration', 
        component: FilmAdministation, 
        title: 'Film Administration'
    },
    { path: 'about', component: About, title: 'About'},
];
