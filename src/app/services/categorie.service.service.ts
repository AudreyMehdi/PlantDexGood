import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>('http://localhost:8080/categorie');
  }

  createCategorie(categorieToCreate: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>('http://localhost:8080/categorie', categorieToCreate);
  }

  deleteCategorie(categorieId: number){
    return this.http.delete(`http://localhost:8080/categorie/${categorieId}`);
  }
 
  getCategorieById(categorieId: number): Observable<Categorie>{
    return this.http.get<Categorie>(`http://localhost:8080/categorie/${categorieId}`);
  }

  updateCategorie(categorieId: number, categorieModif: Categorie): Observable<Categorie>{
    return this.http.put<Categorie>(`http://localhost:8080/categorie/${categorieId}`, categorieModif)
  }
}
