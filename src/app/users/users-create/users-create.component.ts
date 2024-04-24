import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Rol } from '../../interfaces/rol.interface';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {
  usersCreateForm: FormGroup;
  roles: Rol[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.usersCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });

    this.usersService.indexroles().subscribe(roles => {
      this.roles = roles;
    });
  }

  onSubmit() {
    if (this.usersCreateForm.valid) {
      const formData = this.usersCreateForm.value;
      this.usersService.createUser(formData).subscribe(
        (response) => {
          console.log('Usuario creado exitosamente:', response);
          this.router.navigate(['/users']);
        },
        (error) => {
          console.error('Error al crear el usuario:', error);
        }
      );
    }
  }
}