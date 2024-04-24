import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SelectRobotComponent } from './select-robot.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectRobotComponent,
    RouterModule.forChild([
      { path: '', component: SelectRobotComponent },
    ]),
  ]
})
export class SelectRobotModule { }
