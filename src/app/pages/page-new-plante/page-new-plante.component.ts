import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { PlantsService } from '../../services/plants.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieServiceService } from 'src/app/services/categorie.service.service';


@Component({
  selector: 'app-page-new-plante',
  templateUrl: './page-new-plante.component.html',
  styleUrls: ['./page-new-plante.component.css']
})
export class PageNewPlanteComponent{
  

    constructor(private plantsService: PlantsService, private router: Router) {}

  
    newPlantSubmitted(plant: Plant) {
      this.plantsService.createPlant(plant).subscribe((resp) => {
        console.log('New plant created', resp);
        // notre plante est créée on navigue vers la page admin
        this.router.navigate(['/admin']);
      })
    }
}