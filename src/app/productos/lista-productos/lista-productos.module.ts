import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaProductosComponent,
    RouterModule.forChild([
      { path: '', component: ListaProductosComponent },
    ]),
  ]
})
export class ListaProductosModule { }
