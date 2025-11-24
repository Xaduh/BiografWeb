import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Film } from '../interfaces/film';
import { NgFor } from '@angular/common';
import { FilmService } from '../services/film-service';

@Component({
  selector: 'app-film-administation',
  imports: [ReactiveFormsModule, NgFor, FormsModule],
  templateUrl: './film-administation.html',
  styleUrl: './film-administation.css',
})
export class FilmAdministation implements OnInit {
  constructor(private filmService: FilmService) {}

  filmForm: FormGroup = new FormGroup( {
    FilmId: new FormControl<number | null>(null),
    Titel: new FormControl(''),
    UdgivelsesAr: new FormControl(''),
    Genre: new FormControl('')
  })

  FormsmoduleVariabel:string = '';

  FilmListe:Film[] = [];

  ngOnInit() {
    this.filmService.getFilms().subscribe(data => (this.FilmListe = data));
  }

  TilfojFilm():void {
    if (this.filmForm.valid) {
      const newFilm = this.filmForm.value as Film
      this.filmService.postFilm(newFilm);
      // this.FilmListe.push(newFilm);
    }
  }

  // TestFormsModule():void {
  //   console.log(this.FormsmoduleVariabel);
  // }
}
