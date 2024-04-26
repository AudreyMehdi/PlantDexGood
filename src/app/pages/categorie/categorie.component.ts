import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieServiceService } from 'src/app/services/categorie.service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  allCategories: Categorie[] = [];
  

  constructor(private categorieService: CategorieServiceService) {}

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe((data) => {
      console.log(data);
      this.allCategories = [...data];
 });
}

deletePlantClick(categorieToDeleteId: number) {
  this.categorieService.deleteCategorie(categorieToDeleteId).subscribe({
    next: () => {
      this.allCategories = this.allCategories.filter(
        (x) => x.id != categorieToDeleteId
      );
    },
    error: (err) => {
      console.log(err);
    },
  });
}



}
