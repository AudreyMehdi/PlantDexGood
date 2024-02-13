import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css'],
})
export class FilterSideBarComponent {
  // Concerne le filtre par catégories
  @Input() categoriesToDisplay!: string[];
  checkedCategories: string[] = [];
  @Output() categoriesToFilter = new EventEmitter<string[]>();

  // Concerne le filtre par Ensoleillement
  @Output() soleilToFilter = new EventEmitter<string[]>();
  checkedSoleil: string[] = [];
  @Input() soleilToDisplay!: string[];

  // Concerne le filtre par arrosage
  @Output() arrosageToFilter = new EventEmitter<number[]>();
  checkedArrosage: number[] = [];
  @Input() arrosageToDisplay!: number[];

  ////// Méthode qui filtre par catégorie //////
  onCheckedCategories(event: Event) {
    const target = event.target as HTMLInputElement;

    /**
     * Lorsqu'un user coche une checkbox
     * -> On l'ajoute à un tableau de catégorie cochée */
    if (target.checked) {
      /**
       * Lorsqu'un user coche une checkbox après avoir tout décoché
       * -> On doit d'abord vider notre tableau
       * -> et l'ajoute à un tableau de catégorie cochée */
      if (this.checkedCategories.length === this.categoriesToDisplay.length) {
        this.checkedCategories = [];
      }
      this.checkedCategories.push(target.value);
    } else {
      /**
       * Lorsqu'un user décoche une checkbox
       * -> On la retire du tableau de catégorie cochée */
      this.checkedCategories = this.checkedCategories.filter(
        (categorie) => categorie !== target.value
      );

      /**
       * Lorqu'aucune catégorie n'est coché
       * -> On met toutes les catégories par défaut */
      if (this.checkedCategories.length === 0) {
        this.checkedCategories = [...this.categoriesToDisplay];
      }
    }

    this.categoriesToFilter.emit(this.checkedCategories);
    console.log(this.checkedCategories);
  }

  ////// Méthode qui filtre par ensoleillement //////
  onCheckedSoleil(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      if (this.checkedSoleil.length === this.soleilToDisplay.length) {
        this.checkedSoleil = [];
      }
      this.checkedSoleil.push(target.value);
    } else {
      this.checkedSoleil = this.checkedSoleil.filter(
        (soleil) => soleil !== target.value
      );

      if (this.checkedSoleil.length === 0) {
        this.checkedSoleil = [...this.soleilToDisplay];
      }
    }
    this.soleilToFilter.emit(this.checkedSoleil);
    console.log(this.soleilToDisplay);
    console.log(this.checkedSoleil);
    console.log('----------', event);
  }

  //// Méthode qui filtre par arrosage //////
  onCheckedArrosage($event: any) {
    console.log('log event ', $event);
    const target = $event.target;

    if (target.checked) {
      if (this.checkedArrosage.length === this.arrosageToDisplay.length) {
        this.checkedArrosage = [];
      }
      this.checkedArrosage.push(target.value);
    } else {
      this.checkedArrosage = this.checkedArrosage.filter(
        (arrosage) => arrosage !== target.value
      );

      if (this.checkedArrosage.length === 0) {
        this.checkedArrosage = [...this.arrosageToDisplay];
      }
    }
    this.arrosageToFilter.emit(this.checkedArrosage);
    console.log(this.arrosageToDisplay);
    console.log(this.checkedArrosage);
    console.log('-----', target.value);
  }
}
