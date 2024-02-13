import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  allPlants: Plant[] = [];
  saveSearch: string = '';

  //// Recherche par categories
  plantsToDisplay: Plant[] = [];
  categoriesToSend: string[] = [];
  selectedCategory: string[] = [];

  //// Recherche par soleil
  soleilToSend: string[] = [];
  selectedSoleil: string[] = [];

  //// Recherche par arrosage
  arrosageToSend: number[] = [];
  selectedArrosage: number[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];
      this.allPlants = [...data];

      this.categoriesToSend = this.getCategoriesFromPlants(data);
      this.soleilToSend = this.getSoleilFromPlants(data);
      this.arrosageToSend = this.getArrosageFromPlants(data);
    });
  }

  // Méthode qui récupère le tableau de catégories donné par l'enfant
  getCategoriesFromPlants(plants: Plant[]): string[] {
    const categoryArray = plants.map((x) => x.categorie);
    const categorySetUnique = new Set(categoryArray);
    const categoryArrayUnique = [...categorySetUnique];

    return categoryArrayUnique;
  }

  // Méthode qui récupère le tableau d'ensoleillement donné par l'enfant
  getSoleilFromPlants(plants: Plant[]): string[] {
    const soleilArray = plants.map((x) => x.soleil);
    const soleilSetUnique = new Set(soleilArray);
    const soleilArrayUnique = [...soleilSetUnique];

    return soleilArrayUnique;
  }

  // Méthode qui récupère le tableau d'arrosage donné par l'enfant
  getArrosageFromPlants(plants: Plant[]): number[] {
    const arrosageArray = plants.map((x) => x.arrosage);
    const arrosageSetUnique = new Set(arrosageArray);
    const arrosageArrayUnique = [...arrosageSetUnique];

    return arrosageArrayUnique;
  }

  // Filtrer les plantes en fonction de la catégorie sélectionnée
  filterPlantsByNameAndCategory() {
    // d'abord filtrer les plantes par catégories sélectionnées
    const plantsFilteredByCategory = this.allPlants.filter(
      (plant) =>
        this.selectedCategory.length === 0 ||
        this.selectedCategory.includes(plant.categorie)
    );
    // Ensuite filtrer les plantes par nom, suivant la saisie "saveSearch"
    this.plantsToDisplay = plantsFilteredByCategory.filter((plant) =>
      plant.nom.toLowerCase().includes(this.saveSearch.toLowerCase())
    );
  }

  // Filtrer les plantes en fonction de l'ensoleillement sélectionné
  filterPlantsBySoleil() {
    // d'abord filtrer les plantes par soleil sélectionnés
    const plantsFilteredBySoleil = this.allPlants.filter(
      (plant) =>
        this.selectedSoleil.length === 0 ||
        this.selectedSoleil.includes(plant.soleil)
    );
    // Ensuite filtrer les plantes par nom, suivant la saisie "saveSearch"
    this.plantsToDisplay = plantsFilteredBySoleil.filter((plant) =>
      plant.nom.toLowerCase().includes(this.saveSearch.toLowerCase())
    );
  }


  // Filtrer les plantes en fonction de l'arrosage sélectionné
  filterPlantsByArrosage() {
     
    let plantsFilteredByArrosage: Plant[]= [];
    // Vérifie si aucun arrosage n'est sélectionné
    if(this.selectedArrosage.length === 0) {
      // si aucun arrosage n'est sélectionné, affiches toutes les plantes
      plantsFilteredByArrosage = this.allPlants;
    } else {
      // Parcours toutes les plantes
      this.allPlants.forEach(plant => {
        // Parcours de tous les types d'arrosage sélectionnés
      this.selectedArrosage.forEach(arrosage => {
        // Vérifie si le type d'arrosage de la plante correspond à un type sélectionné
        if(arrosage == plant.arrosage){
          // Si le type d'arrosage correspond, ajoute la plante à la liste filtrée
          plantsFilteredByArrosage.push(plant);
        }
      });
    });
    }
        // Filtre supplémentaire basé sur le nom de la plante.
    this.plantsToDisplay = plantsFilteredByArrosage.filter((plant) =>
      plant.nom.toLowerCase().includes(this.saveSearch.toLowerCase())
    );
  }

  // méthode pour filtrer par recherche "search", sauvegardé dans "saveSearch" (appelée dans le composant "search-bar")
  //fait appel à la méthode filterPlantsByNameAndCategory qui check aussi si jamais une catégorie, soleil ou arrosage est sélectionnés.
  onSearchText(search: string) {
    this.saveSearch = search;
    this.filterPlantsByNameAndCategory();
    this.filterPlantsBySoleil();
    this.filterPlantsByArrosage();
  }

  // Méthode pour rechercher par catégories (appelée dans le composant "filter-side-bar")
  onCategorySelected(categories: string[]) {
    this.selectedCategory = [...categories];
    this.filterPlantsByNameAndCategory();
  }

  // Méthode pour rechercher par soleil
  onSoleilSelected(soleil: string[]) {
    this.selectedSoleil = [...soleil];
    this.filterPlantsBySoleil();
  }

  // Méthode pour rechercher par arrosage
  onArrosageSelected(arrosage: number[]) {
    this.selectedArrosage = [...arrosage];
    this.filterPlantsByArrosage();
  }
}
