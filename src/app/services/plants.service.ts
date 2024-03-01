import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/plants');
  }

  createPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/plants', plantToCreate);
  }

  deletePlant(planteToDeleteId: number){
   return this.http.delete(`http://localhost:3000/plants/${planteToDeleteId}`);
   }

   getPlantById(plantId: number): Observable<Plant>{
    return this.http.get<Plant>(`http://localhost:3000/plants/${plantId}`);
   }
}