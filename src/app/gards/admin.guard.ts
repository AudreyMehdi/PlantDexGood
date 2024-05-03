import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    const token = localStorage.getItem('ma response');
    if (token) {
      // Décode le token et récupère la date d'expi
      const decodedToken = jwtDecode<{exp: number}>(token);
      const expirationTimeMillis = decodedToken.exp * 1000;
      const currentTimeMillis = new Date().getTime();

      // Compare la date d'expi avec l'heure actuelle
      if (expirationTimeMillis < currentTimeMillis) {
        console.log("Le jeton a expiré.");
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      } else {
        console.log("Le jeton est toujours valide.");
        return true; 
      }
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
