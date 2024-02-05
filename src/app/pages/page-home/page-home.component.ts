import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  plantsToDisplay: Plant[] = [];
  allPlants: Plant[] = [];
  categoriesToSend: string[] = [];
  saveSearch: string = "";
  selectedCategory: string[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
      this.allPlants = [...data];
  
      this.categoriesToSend = this.getCategoriesFromPlants(data);
    });
  }
// Méthode qui récupère le tableau de catégories donné par l'enfant
  getCategoriesFromPlants(plants: Plant[]): string[] {
    const categoryArray = plants.map((x) => x.categorie);
    const categorySetUnique = new Set(categoryArray);
    const categoryArrayUnique = [...categorySetUnique];

    return categoryArrayUnique;
  }

  // Filtrer les plantes en fonction de la catégorie sélectionnée
  filterPlantsByNameAndCategory() {
    // d'abord filtrer les plantes par catégories sélectionnées
    const plantsFilteredByCategory = this.allPlants.filter((plant) =>
      this.selectedCategory.length === 0 || this.selectedCategory.includes(plant.categorie)
    );
    // Ensuite filtrer les plantes par nom, suivant la saisie "saveSearch"
    this.plantsToDisplay = plantsFilteredByCategory.filter((plant) =>
      plant.nom.toLowerCase().includes(this.saveSearch.toLowerCase())
    );
  }
  
  // méthode pour filtrer par recherche "search", sauvegardé dans "saveSearch" (appelée dans le composant "search-bar")
  //fait appel à la méthode filterPlantsByNameAndCategory qui check aussi si jamais une catégorie est sélectionnée
  onSearchText(search: string) {
    this.saveSearch = search;
    this.filterPlantsByNameAndCategory();
  }

  // Méthode pour rechercher par catégories (appelée dans le composant "filter-side-bar")
  onCategorySelected(categories: string[]) {
  this.selectedCategory = [...categories];
    this.filterPlantsByNameAndCategory();
  }
}