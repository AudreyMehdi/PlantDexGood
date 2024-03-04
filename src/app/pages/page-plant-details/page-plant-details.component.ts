import { Component, OnInit } from '@angular/core';
import { PlantsService } from 'src/app/services/plants.service';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-page-plant-details',
  templateUrl: './page-plant-details.component.html',
  styleUrls: ['./page-plant-details.component.css']
})
export class PagePlantDetailsComponent implements OnInit {
plant!: Plant

 


  constructor(private plantsService: PlantsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   

    const routeParams = this.route.snapshot.paramMap;
    const plantIdFromRoute = Number(routeParams.get('plantId'));



    this.plantsService.getPlantById(plantIdFromRoute).subscribe((data) => {
      console.log('_________',data);
      this.plant = data;
      // next: (response) => {console.log(response) this.plant = response}, si notre requete nous renvoie un success
      // error: () => {} si notre requete nous renvoie une erreur
    });
  }
}

