import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tekstStreng:string = '';
  tekstTilUdskrivning:string = '';

  visElement:boolean = false;
  tæller:number = 0;
  holder:any;
  numberList: number[] = [1,20,345];

  user: User = {
    id: 1,
    name: 'Oliver'
  }

  //#region variabler & metoder
  user2: UserClass = new UserClass('Oliver');

  test() {
    console.log('Hej fra test');
  }

  Kalkulering(): number {
    return 2 + 2;
  }

  IAmLying(): boolean {
    return true;
  }

  Writer(a: string) {
    console.log(a)
  }

  kontakt() {
    this.visElement = !this.visElement;
  }
  //#endregion
  VisTekst() {
    this.tekstTilUdskrivning = this.tekstStreng;
  }

  GemTilSessionStorage() {
    sessionStorage.setItem("HomeKey", this.tekstStreng);

    localStorage.setItem("HomeKey", this.tekstStreng);
  }

  SkrivFraSessionStorage() {
    this.tekstTilUdskrivning = sessionStorage.getItem("HomeKey") ?? 'NA';

    this.tekstTilUdskrivning = localStorage.getItem("HomeKey") ?? 'NA';
  }

  ngOnInit() {
    this.numberList[50] = 100;

    this.numberList.forEach(element => {
      console.log(element);
    });
  }
}

class UserClass {
  name = '';
  constructor(t: string) {
    this.name = t;
  }
}
