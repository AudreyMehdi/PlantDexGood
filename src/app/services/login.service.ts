import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  
  getToken(
    url: string,
    client_id: string,
    client_secret: string,
    username: string,
    password: string
  ) {
    const urlencoded = new URLSearchParams({
      grant_type: 'password',
      client_id: client_id,
      client_secret: client_secret,
      username: username,
      password: password,
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    };
    return this.http.post(url, urlencoded, httpOptions);
  }

  sendTokenBack(access_token: string) {
    const httpOptions = {
      responseType: "text" as "json",
      headers: new HttpHeaders({
        Authorization: `Bearer ${access_token}`,
      }),
    };

    return this.http.get('http://localhost:8080/admin', httpOptions);
  }
}
