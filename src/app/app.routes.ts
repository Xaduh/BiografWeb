import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home, title: 'Forside' },
    { path: 'about', component: About, title: 'About'},
];
