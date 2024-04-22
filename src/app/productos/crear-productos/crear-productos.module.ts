import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductosComponent } from './crear-productos.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrearProductosComponent,
    RouterModule.forChild([
      { path: '', component: CrearProductosComponent },
    ]),
  ]
})
export class CrearProductosModule { }
