import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesComponent } from './ordenes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    OrdenesComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OrdenesComponent },
    ]),
 ],
})
export class OrdenesPendientesModule { }
