import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllOrdersComponent } from './all-orders.component';

@NgModule({
  declarations: [],
  imports: [
    AllOrdersComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AllOrdersComponent },
    ]),
 ],
})
export class AllOrdersModule { }
