import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresosComponent } from '../base-ingresos/ingresos.component';
import { RouterModule } from '@angular/router';



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
export class IngresosPorDiaModule { }
