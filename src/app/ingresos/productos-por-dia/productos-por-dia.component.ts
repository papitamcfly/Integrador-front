import { Component } from '@angular/core';
import { IngresosServiceService } from '../ingresos-service.service';
import { ProductGroup } from '../../interfaces/productos-ingresos.interface';
import { Router } from '@angular/router';
import { PusherserviceService } from '../../pusherservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { fadeInOutAnimations } from '../../animations';

@Component({
  selector: 'app-productos-por-dia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: fadeInOutAnimations,
  templateUrl: './productos-por-dia.component.html',
  styleUrl: './productos-por-dia.component.css'
})
export class ProductosPorDiaComponent implements OnInit{
  productos: ProductGroup[] = []
  type:string = 'PorDia'
  cargando: boolean = true;
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
        this.cargando = false; 
        console.log(productos)
      },
      (error) => {
        console.error(error)
      }
  
  )
}
}
