import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilmService } from '../../services/film-service';
import { IFilm } from '../../modelo/film-model';
import { IFilter } from '../../modelo/filter-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-films',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list-films.html',
  styleUrl: './list-films.css'
})
export class ListFilmsComponent implements OnInit {
  private filmService = inject(FilmService);

  listaPeliculas: IFilm[] = [];

  filter: IFilter = {
    searchBy: 'title',
    value: ''
  };

  ngOnInit(): void {
  }

  filterData(): void {
    const valor = this.filter.value.trim();

    if (!valor) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo vacío',
        text: 'Por favor, ingresa un término de búsqueda para filtrar.'
      });
      this.listaPeliculas = [];
      return;
    }

    switch (this.filter.searchBy) {
      case 'title':
        this.filmService.getFilmsByTitle(valor).subscribe(data => this.listaPeliculas = data);
        break;

      case 'originalTitle':
        this.filmService.getFilmsByOriginalTitle(valor).subscribe(data => this.listaPeliculas = data);
        break;

      case 'director':
        this.filmService.getFilmsByDirector(valor).subscribe(data => this.listaPeliculas = data);
        break;

      case 'producer':
        this.filmService.getFilmsByProducer(valor).subscribe(data => this.listaPeliculas = data);
        break;

      case 'releaseDate':
        this.filmService.getFilmsByReleaseDate(valor).subscribe(data => this.listaPeliculas = data);
        break;

      case 'score':
        this.filmService.getFilmsByScore(valor).subscribe(data => this.listaPeliculas = data);
        break;

      case 'runningTime':
        this.filmService.getFilmsByRunningTime(valor).subscribe(data => this.listaPeliculas = data);
        break;

      default:
        this.listaPeliculas = [];
        break;
    }
  }
}