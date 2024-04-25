import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarMeseroComponent } from './editar-mesero.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditarMeseroComponent,
    RouterModule.forChild([
      { path: '', component: EditarMeseroComponent },
    ]),
  ]
})
export class EditarMeseroModule { }
