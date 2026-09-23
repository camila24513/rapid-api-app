import { Component, inject } from '@angular/core';
import { IFilter } from '../../modelo/filter-model';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../../services/film-service';
import { IFilm } from '../../modelo/film-model';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-films',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './list-films.html'
})
export class ListFilms {
  private filmService = inject(FilmService);

  public listaPeliculas: IFilm[] = [];
  public filter: IFilter = { searchBy: 'title', value: '' };

  ngOnInit() {
    this.filterData();
  }

  filterData() {
    this.filmService.getFilms(this.filter).subscribe({
      next: (data) => {
        this.listaPeliculas = data;
        if (data.length === 0) {
          Swal.fire({
            title: 'Sin resultados',
            text: 'No se encontraron películas de Studio Ghibli con ese filtro',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      error: () => {
        this.listaPeliculas = [];
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al consultar la API de Studio Ghibli',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }
}