import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.css']
})
export class SeachBarComponent implements OnInit {
 
 @Output() val = new EventEmitter<string>();
 constructor() {}
 
 
  ngOnInit() {}
 methodEnfant(event: any) {
  this.val.emit(event.target.value);
  console.log('enfant', event.target.value);
 }
}
