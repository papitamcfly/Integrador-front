import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditarProductosComponent } from './editar-productos.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditarProductosComponent,
    RouterModule.forChild([
      { path: '', component: EditarProductosComponent },
    ]),
  ]
})
export class EditarProductosModule { }
