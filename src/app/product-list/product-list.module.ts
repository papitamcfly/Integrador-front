import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports:[
    ProductListComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
    ]),
 ],
})
export class ProductListModule { }
