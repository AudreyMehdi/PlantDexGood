import { Injectable } from '@angular/core';
import { Plant } from './models/plant';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Plant[] = [];

  constructor() { }

addToCart(plant:Plant) {
  this.items.push(plant);
}

getItems(){
  return this.items;
}

clearCart(){
  this.items = [];
  return this.items;
}
}
