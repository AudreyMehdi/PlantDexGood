import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent  implements OnInit{
  formPlant! : FormGroup;
  @Output() submitFormPlant = new EventEmitter<Plant>();


  ngOnInit(): void {
   this.initForm();
  }


initForm(){
  this.formPlant = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.minLength(2)]),
    image: new FormControl('',Validators.required),
    categorie: new FormControl('',Validators.required),
    soleil: new FormControl('',Validators.required),
    arrosage: new FormControl('',Validators.required),
  });
  console.log(this.formPlant);
}

onSubmitForm(){
  console.log(this.formPlant.value);
  this.submitFormPlant.emit(this.formPlant.value);
}

}
