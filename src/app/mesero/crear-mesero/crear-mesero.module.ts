import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrearMeseroComponent } from './crear-mesero.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrearMeseroComponent,
    RouterModule.forChild([
      { path: '', component: CrearMeseroComponent },
    ]),
  ]
})
export class CrearMeseroModule { }
