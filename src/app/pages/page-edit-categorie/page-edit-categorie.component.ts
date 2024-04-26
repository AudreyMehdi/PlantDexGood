import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieServiceService } from 'src/app/services/categorie.service.service';

@Component({
  selector: 'app-page-edit-categorie',
  templateUrl: './page-edit-categorie.component.html',
  styleUrls: ['./page-edit-categorie.component.css']
})
export class PageEditCategorieComponent {
categorie! : Categorie;


constructor(
  private categorieService: CategorieServiceService,
  private route: ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const categorieIdFromroute = Number(routeParams.get('categorieId'));

  console.log('valeur id : ', categorieIdFromroute);


  this.categorieService.getCategorieById(categorieIdFromroute).subscribe((data) => {
    console.log('_________', data);
    this.categorie = data;
    
  });
}
  modifCatSubmitted(catUpdate: Categorie) {
    this.categorieService.updateCategorie(catUpdate.id, catUpdate).subscribe((resp) => {
      console.log('cat modif', resp);
      this.router.navigate(['/categorie']);
    })
  }
}
