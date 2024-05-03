import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {

  token!: string;

  username = 'user1';
  password = 'password';
  clientid = 'cda';
  clientsercret = 'aVAiDY0VIdxt0FHkP5xQ21kX09zgwUYl';
  url = 'http://192.168.33.10:9090/realms/cda/protocol/openid-connect/token';
  response: string = 'No response yet';
  reponseEnvoiBack!: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
  }

  onClickSendRequest() {
    this.loginService
      .getToken(
        this.url,
        this.clientid,
        this.clientsercret,
        this.username,
        this.password
      )
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.response = JSON.stringify(data);
          console.log("response", this.response);
          localStorage.setItem('ma response', this.response);

        
          this.token = data.access_token
          const decodedToken = jwtDecode(this.token);
          console.log("decodeToken",decodedToken.exp);

          console.log("data access token",data.access_token)
          
         
          this.sendAccessTokenToBackend(this.token);
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.response = JSON.stringify(error);
        },
      });
  } 

  sendAccessTokenToBackend(accessToken: string) {
    this.loginService.sendTokenBack(
      accessToken
    ).subscribe({
      next: (data: any) => {
        console.log(data);
        this.reponseEnvoiBack = JSON.stringify(data);
        console.log("response ta mère", this.reponseEnvoiBack);
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.reponseEnvoiBack = JSON.stringify(error);
      },
    });
  }
}

