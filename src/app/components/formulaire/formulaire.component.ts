import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() plante1! : Plant;
  @Output() plantUpdate = new EventEmitter<Plant>();

  ngOnInit(): void {
   this.initForm();
  }

initForm(){
  if (this.plante1){
  this.formPlant = new FormGroup({
    nom: new FormControl(this.plante1.nom,[Validators.required, Validators.minLength(2)]),
    image: new FormControl(this.plante1.image,Validators.required),
    categorie: new FormControl(this.plante1.categorie,Validators.required),
    soleil: new FormControl(this.plante1.soleil,Validators.required),
    arrosage: new FormControl(this.plante1.arrosage,Validators.required),
    id: new FormControl(this.plante1.id,Validators.required),
  });
  console.log(this.formPlant);
  console.log('nom de ma plante',this.plante1.nom);
  console.log('id de ma plante',this.plante1.id);
} else {
  this.formPlant = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.minLength(2)]),
    image: new FormControl('',Validators.required),
    categorie: new FormControl('',Validators.required),
    soleil: new FormControl('',Validators.required),
    arrosage: new FormControl('',Validators.required),
   
  });





}
}

onSubmitForm(){
  console.log('valeur1',this.formPlant.value);
  this.submitFormPlant.emit(this.formPlant.value);
  console.log('plante forme value 1',this.formPlant.value);
  this.plantUpdate.emit(this.formPlant.value);
  console.log('plante forme value 2',this.formPlant.value);
}
}
