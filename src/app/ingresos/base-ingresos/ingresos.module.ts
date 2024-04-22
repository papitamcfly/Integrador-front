import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IngresosComponent } from './ingresos.component';

@NgModule({
  declarations: [],
  imports: [
    IngresosComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: IngresosComponent },
    ]),
 ],
})
export class IngresosModule { }