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
    return this.http.get<Plant[]>('http://localhost:8080/plante');
  }

  createPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:8080/plante', plantToCreate);
  }

  deletePlant(planteToDeleteId: number){
   return this.http.delete(`http://localhost:8080/plante/${planteToDeleteId}`);
   }

   getPlantById(plantId: number): Observable<Plant>{
    return this.http.get<Plant>(`http://localhost:8080/plante/${plantId}`);
   }

   updatePlant(plantId: number, plantModif: Plant): Observable<Plant>{
    return this.http.put<Plant>(`http://localhost:8080/plante/${plantId}`, plantModif);
    
   }

}