import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-edit-plant',
  templateUrl: './page-edit-plant.component.html',
  styleUrls: ['./page-edit-plant.component.css'],
})
export class PageEditPlantComponent {
  plant!: Plant;

  constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const plantIdFromRoute = Number(routeParams.get('plantId'));

    this.plantsService.getPlantById(plantIdFromRoute).subscribe((data) => {
      console.log('_________', data);
      this.plant = data;
      // next: (response) => {console.log(response) this.plant = response}, si notre requete nous renvoie un success
      // error: () => {} si notre requete nous renvoie une erreur
    });
  }

  modifPlantSubmitted(updatePlant: Plant) {
    this.plantsService.updatePlant(updatePlant.id, updatePlant).subscribe((resp) => {
      console.log('plante modif', resp);
      this.router.navigate(['/admin']);
    })
  }
}
