import { Component } from '@angular/core';
import { IngresosServiceService } from '../ingresos-service.service';
import { Ingresos } from '../../interfaces/ingresos';
import { Router } from '@angular/router';
import { PusherserviceService } from '../../pusherservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { fadeInOutAnimations } from '../../animations';

@Component({
  selector: 'app-ingresos-por-dia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: fadeInOutAnimations,
  templateUrl: './ingresos-por-dia.component.html',
  styleUrl: './ingresos-por-dia.component.css'
})
export class IngresosPorDiaComponent implements OnInit{
  ingresos: Ingresos[] = []
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
    this.IngresosService.viewIngresosByType(type).subscribe(
      (ingresos: Ingresos[])=> {
        this.ingresos = ingresos
        this.cargando = false; 
        console.log(ingresos)
      },
      (error) => {
        console.error(error)
      }
  
  )
}
}