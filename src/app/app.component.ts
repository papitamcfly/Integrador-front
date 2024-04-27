import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from './cookies.service';
import { LoginService } from './login/login.service';
import {RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute} from "@angular/router";
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
 userId: number = 0;
 rolId: number = 0;
 hasAuthToken: boolean = false;
 hascAuthToken: boolean = false;
 constructor(
  private cookieService: CookieService,
  private router: Router,
  private loginService: LoginService,
  private route: ActivatedRoute,
  private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const cAuthToken = this.cookieService.getCookie('authToken');
    this.hascAuthToken = !!cAuthToken;

    if (this.hascAuthToken) {
      this.rolId = parseInt(this.cookieService.getCookie('rol') || '0', 10);
      this.userId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.rolId = 0;
    }
  }


  logOut(event: Event) {
    event.preventDefault();
    const confirmLogout = confirm('¿Estás seguro de que deseas cerrar la sesión?');
    if (confirmLogout) {
      localStorage.removeItem('authToken');
      this.cookieService.deleteFCookie('authToken');
      this.cookieService.deleteFCookie('rol');
      this.rolId = 0;
      this.changeDetectorRef.detectChanges();
      window.location.reload();
      this.loginService.logoutUser().subscribe(
        (response: any) => {
          console.log(response.message);

        },
        error => {
          console.error('Error al cerrar la sesión:', error);
        }
      );
    }
    
  }
  ngOnDestroy() {
    this.cookieService.deleteFCookie('authToken');
    this.cookieService.deleteFCookie('rol');
  }
}