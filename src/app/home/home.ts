import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // npm install ngx-cookie-service@20.1.0 i dette projekt, få version til at passe sammen med angular version.
  // constructor(private cookieService: CookieService) {}

  // test2():void {
  //   // cookieService har metoderne: set, get, getall, delete, deleteall & check.
  //   this.cookieService.
  // }

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

  GemTilStorage() {
    // sessionStorage.setItem("HomeKey", this.tekstStreng);

    // localStorage.setItem("HomeKey", this.tekstStreng);

    document.cookie = `testvalue=${this.tekstStreng}; expires=Wed, 26 Nov, 2025 23:59:59 GMT; path=/`;
  }

  SkrivFraStorage() {
    // this.tekstTilUdskrivning = sessionStorage.getItem("HomeKey") ?? 'NA';

    // this.tekstTilUdskrivning = localStorage.getItem("HomeKey") ?? 'NA';

    const cookies = document.cookie.split('; ')
    const cookie = cookies.find(row => row.startsWith("testvalue" + "="));
    this.tekstTilUdskrivning = cookie ? cookie.split("=")[1] : "";
  }

  DeleteFraStorage() {
    this.tekstTilUdskrivning = "";

    // sessionStorage.removeItem("HomeKey");

    // localStorage.removeItem("HomeKey");

    document.cookie = `testvalue=; expires=Thu, 01 Jan, 1970 00:00:00 GMT; path=/`;
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
