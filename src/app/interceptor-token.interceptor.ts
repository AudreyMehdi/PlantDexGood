import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 // l'URL spécifique à exclure
 if (request.url === 'http://localhost:8080/plante') {
  return next.handle(request);
}

    const token = localStorage.getItem('token'); // je récupère le token dans le local storage
    if (token) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq); // si aucun jeton de dispo on passe la requête d'origine
     
    } else {
    return next.handle(request);
  }
  }
}
