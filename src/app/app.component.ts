import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'J&Ts Tit House';
  kegs: Keg[] = [];
  createKeg(kegName: string, beerBrand: string, price: number, alcoholContent: number, kegs: Keg[]){
    const newKeg = new Keg(kegName, beerBrand, price, alcoholContent);
    this.kegs.push(newKeg);
  }
}
