import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarMeserosComponent } from './mostrar-meseros.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    MostrarMeserosComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MostrarMeserosComponent },
    ]),
 ],
})
export class MostrarMeserosModule { }
