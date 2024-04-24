import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRecientesComponent } from './logs-recientes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    LogsRecientesComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LogsRecientesComponent },
    ]),
 ],
})
export class LogsRecientesModule { }
