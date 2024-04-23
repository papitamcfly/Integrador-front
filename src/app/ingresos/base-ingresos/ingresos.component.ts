import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresosPorDiaComponent } from '../ingresos-por-dia/ingresos-por-dia.component';
import { IngresosPorMesComponent } from '../ingresos-por-mes/ingresos-por-mes.component';
import { IngresosPorSemanaComponent } from '../ingresos-por-semana/ingresos-por-semana.component';
import { ProductosPorDiaComponent } from '../productos-por-dia/productos-por-dia.component';
import { ProductosPorSemanaComponent } from '../productos-por-semana/productos-por-semana.component';
import { ProductosPorMesComponent } from '../productos-por-mes/productos-por-mes.component';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule, IngresosPorDiaComponent, IngresosPorMesComponent, IngresosPorSemanaComponent, ProductosPorDiaComponent,ProductosPorSemanaComponent, ProductosPorMesComponent],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.scss'
})
export class IngresosComponent {
  showComponent:string = 'PorDia';
  showIngresos:boolean = true;
  showProductos:boolean = false;
}
