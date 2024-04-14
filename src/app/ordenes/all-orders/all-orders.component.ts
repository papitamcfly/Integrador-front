import { Component } from '@angular/core';
import { OrdenesComponent } from '../ordenes-pendientes/ordenes.component';
import { OrdenesEnProcesoComponent } from '../ordenes-en-proceso/ordenes-en-proceso.component';
import { OrdenesRechazadasComponent } from '../ordenes-rechazadas/ordenes-rechazadas.component';
import { CommonModule } from '@angular/common';
import { OrdenesTerminadasComponent } from '../ordenes-terminadas/ordenes-terminadas.component';
@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [OrdenesComponent, OrdenesEnProcesoComponent,CommonModule,OrdenesRechazadasComponent,OrdenesTerminadasComponent],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  showComponent:string = 'pendientes'
}