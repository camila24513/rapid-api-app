import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IFilm, IPerson, IVehicle } from '../modelo/film-model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private http = inject(HttpClient);
  private baseUrl = 'https://ghibliapi.vercel.app';

  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(`${this.baseUrl}/films`);
  }

  getFilmById(id: string): Observable<IFilm> {
    return this.http.get<IFilm>(`${this.baseUrl}/films/${id}`);
  }

  getFilmsByTitle(title: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.title.toLowerCase().includes(title.toLowerCase())))
    );
  }

  getFilmsByOriginalTitle(originalTitle: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.original_title_romanised.toLowerCase().includes(originalTitle.toLowerCase())))
    );
  }

  getFilmsByDirector(director: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.director.toLowerCase().includes(director.toLowerCase())))
    );
  }

  getFilmsByProducer(producer: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.producer.toLowerCase().includes(producer.toLowerCase())))
    );
  }

  getFilmsByReleaseDate(year: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.release_date === year))
    );
  }

  getFilmsByScore(score: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.rt_score === score))
    );
  }

  getFilmsByRunningTime(minutes: string): Observable<IFilm[]> {
    return this.getFilms().pipe(
      map(films => films.filter(f => f.running_time === minutes))
    );
  }

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(`${this.baseUrl}/vehicles`);
  }
}