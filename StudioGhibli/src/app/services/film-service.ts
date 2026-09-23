import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IFilter } from "../modelo/filter-model";
import { first, map } from "rxjs";
import { IFilm } from "../modelo/film-model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private URL_BASE = "https://ghibliapi.vercel.app/films";
  private http = inject(HttpClient);

  getFilms(filter: IFilter) {
    return this.http.get<any[]>(this.URL_BASE).pipe(
      first(),
      map((films: any[]) => {
        let parsedFilms = films.map(film => ({
          id: film.id,
          title: film.title,
          original_title: film.original_title,
          image: film.image,
          description: film.description,
          director: film.director,
          release_date: film.release_date
        } as IFilm));

        if (filter.searchBy === 'title' && filter.value) {
          const val = filter.value.toLowerCase();
          parsedFilms = parsedFilms.filter(f => f.title.toLowerCase().includes(val));
        }

        return parsedFilms;
      })
    );
  }

  getFilmByID(id: string) {
    return this.http.get<any>(`${this.URL_BASE}/${id}`).pipe(
      first(),
      map((film: any) => ({
        id: film.id,
        title: film.title,
        original_title: film.original_title,
        image: film.image,
        description: film.description,
        director: film.director,
        release_date: film.release_date
      } as IFilm))
    );
  }
}