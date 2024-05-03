import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    
  items = this.cartService.getItems(); // je lui donne la valeur du local storage pour l'afficher dans le html

  constructor(private cartService: CartService){}


  ngOnInit(): void {
    console.log('items',this.items);
  }

  removePlante(){
    this.cartService.removePlanteCart();
    location.reload();
  }

  deleteOneItem(index: number){
    this.items.splice(index ,1)
    localStorage.setItem('monObjet', JSON.stringify(this.items));
  }
}
