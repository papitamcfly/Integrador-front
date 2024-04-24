import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCreateComponent } from './users-create.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule

@NgModule({
  declarations: [UsersCreateComponent], // Declarar el componente
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importar ReactiveFormsModule
    RouterModule.forChild([
      { path: '', component: UsersCreateComponent },
    ]),
  ],
})
export class UsersCreateModule {}