import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 standalone: true,
 imports: [RouterOutlet,RouterLink,RouterLinkActive, CommonModule],
 styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 title = 'Roborestaurant';
 rolId: number = 0;
 hasAuthToken: boolean = false;
 hascAuthToken: boolean = false;
 constructor(
  private cookieService: CookieService,
  private router: Router,
  private loginService: LoginService,
  private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');
    const cAuthToken = this.cookieService.get('authToken');
    this.hasAuthToken = !!authToken; // Convierte el valor a booleano
    this.hascAuthToken = !!cAuthToken;

    if (this.hasAuthToken && this.hascAuthToken) {
      this.rolId = parseInt(this.cookieService.get('rol') || '0', 10);
    } else {
      this.rolId = 0;
    }
  }


  logOut(event: Event) {
    event.preventDefault();
    const confirmLogout = confirm('¿Estás seguro de que deseas cerrar la sesión?');
    if (confirmLogout) {
      this.loginService.logoutUser().subscribe(
        (response: any) => {
          console.log(response.message);

        },
        error => {
          console.error('Error al cerrar la sesión:', error);
        }
      );
      localStorage.removeItem('authToken');
      this.cookieService.delete('authToken');
      this.cookieService.delete('rol');
      this.rolId = 0;
      this.changeDetectorRef.detectChanges();
      window.location.reload();
      
    }
  }
}