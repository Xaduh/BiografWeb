import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmField: Film[] = [
    { FilmId: 1, Titel: 'Harry Flemming', UdgivelsesAr: 2025, Genre: 'Kommedie' },
    { FilmId: 2, Titel: 'Harry Flemming, og fangerne på Askeban', UdgivelsesAr: 2026, Genre: 'Gys' }
  ]

  private film$ = new BehaviorSubject<Film[]>(this.filmField);

  getFilms(): Observable<Film[]> {
    return this.film$.asObservable();
  }

  postFilm(film: Film) {
    film.FilmId = this.filmField.length ? Math.max(...this.filmField.map(f => f.FilmId!)) + 1 : 1;
    this.filmField.push(film);
    this.film$.next(this.filmField);
  } 

  deleteFilm(id: number) {

  }

  putFilm(id:number, film: Film) {

  }
}

// FilmId:number;
//     Titel:string;
//     UdgivelsesAr:number;
//     Genre:string;
