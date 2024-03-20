import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-page-my-plants',
  templateUrl: './page-my-plants.component.html',
  styleUrls: ['./page-my-plants.component.css']
})
export class PageMyPlantsComponent implements OnInit {

  items: Plant[] = [];  
 

  
  constructor(private cartService: CartService){}
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
