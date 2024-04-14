import { Component } from '@angular/core';
import { OrdenesComponent } from '../ordenes-pendientes/ordenes.component';
import { OrdenesEnProcesoComponent } from '../ordenes-en-proceso/ordenes-en-proceso.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [OrdenesComponent, OrdenesEnProcesoComponent,CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  showComponent: 'ordenes' | 'ordenesEnProceso' = 'ordenes';
}