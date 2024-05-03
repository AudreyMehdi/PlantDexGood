import { Component, Input } from '@angular/core';
import { Plant } from '../../models/plant';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css'],
})
export class CardPlantComponent {
  @Input() plant!: Plant;

  constructor(private cartService : CartService){}

  ajout(plant: Plant){
    this.cartService.addToCart(plant);
    console.log("ajout",plant)
  }
}
