import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie';
import { Plant } from 'src/app/models/plant';
import { CategorieServiceService } from 'src/app/services/categorie.service.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent  implements OnInit{
  formPlant! : FormGroup;
  @Output() submitFormPlant = new EventEmitter<Plant>();
  @Input() plante1 : Plant | undefined | null 
  allCategories: Categorie[] = [];

  constructor(private CategorieService: CategorieServiceService) {}

  ngOnInit(): void {
   this.initForm();
   this.CategorieService.getCategories().subscribe((data) => {
    console.log("mon tableau de cat : ",data);
    this.allCategories = [...data];
});
  }

initForm(){
  // if (this.plante1){
  this.formPlant = new FormGroup({
    nom: new FormControl(this.plante1?.nom,[Validators.required, Validators.minLength(2)]),
    image: new FormControl(this.plante1?.image,Validators.required),
    categorie: new FormControl(this.plante1?.categorie,Validators.required),
    // categorieId: new FormControl(this.plante1?.),
    soleil: new FormControl(this.plante1?.soleil,Validators.required),
    arrosage: new FormControl(this.plante1?.arrosage,Validators.required),
    id: new FormControl(this.plante1?.id,this.newMethod()),
  });
  console.log(this.formPlant);
  console.log('nom de ma plante',this.plante1?.nom);
  console.log('id de ma plante',this.plante1?.id);
// } else {
//   this.formPlant = new FormGroup({
//     nom: new FormControl('',[Validators.required, Validators.minLength(2)]),
//     image: new FormControl('',Validators.required),
//     categorie: new FormControl('',Validators.required),
//     soleil: new FormControl('',Validators.required),
//     arrosage: new FormControl('',Validators.required),
   
//   });
// }
}

  private newMethod() {
    console.log("this.newMethod")
    return this.plante1 !== null && this.plante1 !== undefined ?
    Validators.required : Validators.nullValidator;
  }

onSubmitForm(){
  console.log('valeur1',this.formPlant.value);
  this.submitFormPlant.emit(this.formPlant.value);
  console.log('plante forme value 1',this.formPlant.value);
}
}
