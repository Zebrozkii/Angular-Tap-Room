import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'J&Ts Tap House';
  kegs: Keg[] = [];
  createKeg(kegName: string, beerBrand: string, price: number, alcoholContent: number){
    const newKeg = new Keg(kegName, beerBrand, price, alcoholContent);
    this.kegs.push(newKeg);
  }
  selectedKeg: Keg = this.kegs[0];
  // getCurrentKeg(currentKeg){
  //   this.selectedKeg = currentKeg;
  // }
  getABeer(currentKeg) {
    currentKeg.kegAmount = currentKeg.kegAmount - 1;
  }
  kegAmountColor(currentKeg) {
    if (currentKeg.kegAmount >= 75){
      return "text-info";
    } else if ((currentKeg.kegAmount) < 75 && (currentKeg.kegAmount > 10)) {
      return "text-warning";
    } else {
      return "text-danger";
    }
  }
  kegPriceColor(currentKeg) {
    if (currentKeg.price >= 5){
      return "text-primary";
    } else {
      return "text-success";
    }
  }
  kegAlcoholColor(currentKeg){
    if (currentKeg.alcoholContent >= 8){
      return "text-danger";
    }else{
      return "text-info";
    }
  }
}
