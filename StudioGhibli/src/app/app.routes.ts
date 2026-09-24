import { Routes } from '@angular/router';
import { ListFilmsComponent } from './componentes/list-films/list-films';
import { DetailFilmComponent } from './componentes/detail-film/detail-film';

export const routes: Routes = [
  { path: '', component: ListFilmsComponent },
  { path: 'detail-film/:id', component: DetailFilmComponent }, 
  { path: '**', redirectTo: '' }
];