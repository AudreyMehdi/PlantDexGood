import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieServiceService } from 'src/app/services/categorie.service.service';

@Component({
  selector: 'app-page-new-categorie',
  templateUrl: './page-new-categorie.component.html',
  styleUrls: ['./page-new-categorie.component.css']
})
export class PageNewCategorieComponent {
  constructor(private categorieService: CategorieServiceService, private router: Router) {}

   newCategorieSubmitted(categorie: Categorie){
    console.log("categorie",categorie)
    this.categorieService.createCategorie(categorie).subscribe((resp) => {
      console.log('New cat created', resp);
      this.router.navigate(['/categorie']);
    })
   }

  }




