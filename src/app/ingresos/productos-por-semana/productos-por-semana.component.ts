import { Component } from '@angular/core';
import { IngresosServiceService } from '../ingresos-service.service';
import { ProductGroup } from '../../interfaces/productos-ingresos.interface';
import { Router } from '@angular/router';
import { PusherserviceService } from '../../pusherservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-por-semana',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos-por-semana.component.html',
  styleUrl: './productos-por-semana.component.css'
})
export class ProductosPorSemanaComponent implements OnInit {
  productos: ProductGroup[] = []
  type:string = 'PorSemana'
  constructor(private IngresosService: IngresosServiceService, private router: Router, private pusherService:PusherserviceService){}
  ngOnInit(){
    this.getIngresoByStatus(this.type)
        this.pusherService.subscribeToTypeUpdatedEvent((data) => {
          this.getIngresoByStatus(this.type);
        });
  }
  getIngresoByStatus(type:string){
    this.IngresosService.viewIngresosWithProducts(type).subscribe(
      (productos: ProductGroup[])=> {
        this.productos = productos
        console.log(productos)
      },
      (error) => {
        console.error(error)
      }
  
  )
}
}
