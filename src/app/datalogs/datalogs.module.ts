import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DatalogsComponent } from './datalogs.component';


@NgModule({
  declarations: [],
  imports: [
    DatalogsComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DatalogsComponent },
    ]),
 ],
})
export class LogsModule { }
