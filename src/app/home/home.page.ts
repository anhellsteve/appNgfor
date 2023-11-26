import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  marvelList: any[];
  constructor() {
    this.marvelList = [
      {
        name: 'Iron Man',
        color: 'red',
      },
      {
        name: 'Capitan America',
        color: 'blue',
      },
      {
        name: 'Hulk',
        color: 'green',
      },
    ];
  }
}
