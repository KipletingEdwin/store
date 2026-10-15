
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

    today : Date = new Date();
    myName: string = 'Dave';
    isLoading: boolean = true;
    isAlbum: any;
    

  constructor() {
    // console.log(this.myName)
    // console.log(this.today)
  }

}
