import { Injectable } from '@angular/core';
import { Plant } from './models/plant';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Plant[] = [];

  constructor() {
    this.items = JSON.parse(localStorage.getItem('monObjet') || '[]'); // je le mets dans le constructor pour
    // que ce soit la premiere chose qui soit fait quand l'appli se lance.
    // mon panier ne se videra pas si je ferme l'appli
   }

addToCart(plant:Plant) {
  this.items.push(plant);
  console.log("item.push",this.items)
  localStorage.setItem('monObjet', JSON.stringify(this.items));
}

getItems(){
  return this.items;
}

removePlanteCart(){
  this.items = [];
  localStorage.removeItem('monObjet');
  return this.items;
}
}
