import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-formulaire-categorie',
  templateUrl: './formulaire-categorie.component.html',
  styleUrls: ['./formulaire-categorie.component.css']
})
export class FormulaireCategorieComponent implements OnInit {
  formCategorie! : FormGroup;
  @Output() submitFormCat = new EventEmitter<Categorie>();
  @Input() categorie1! : Categorie | undefined | null; 

  ngOnInit(): void {
    this.initForm();
   }

   initForm(){
    this.formCategorie = new FormGroup({
      libelle: new FormControl(this.categorie1?.libelle,Validators.required),
      id: new FormControl(this.categorie1?.id,this.newMethod()),
    });
    console.log("------------------",this.formCategorie);
    console.log('nom de ma categorie',this.categorie1?.libelle);
   }


   onSubmitForm(){
    console.log('valeur1',this.formCategorie.value);
    this.submitFormCat.emit(this.formCategorie.value);
    console.log('plante forme value 1',this.formCategorie.value);
  }


  private newMethod() {
    console.log("this.newMethod")
    return this.categorie1 !== null && this.categorie1 !== undefined ?
    Validators.required : Validators.nullValidator;
  }




}
