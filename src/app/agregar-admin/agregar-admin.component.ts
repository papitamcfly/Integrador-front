import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { PusherserviceService } from '../pusherservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-agregar-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-admin.component.html',
  styleUrl: './agregar-admin.component.scss'
})
export class AgregarAdminComponent implements OnInit{
  users: User[] = []
  constructor(private UsersServive: UsersService,  private router: Router, private pusherService:PusherserviceService){}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.UsersServive.indexuser()
    .subscribe(users => this.users = users );
  }
  determineRol(user: any) {
    if (user.rol === 1) {
      return 'Empleado';
    } else {
      return 'Admin';
    }
  }
}
