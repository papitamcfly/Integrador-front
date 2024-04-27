import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAdminComponent } from './agregar-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    AgregarAdminComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AgregarAdminComponent },
    ]),
 ],
})
export class AgregarAdminModule { }