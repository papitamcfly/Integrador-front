import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesEnProcesoComponent } from './ordenes-en-proceso.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports:  [
    OrdenesEnProcesoComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OrdenesEnProcesoComponent },
    ]),
 ],
})
export class OrdenesEnProcesoModule { }
