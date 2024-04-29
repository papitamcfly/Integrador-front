import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Ordenes } from '../../interfaces/ordenes';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PusherserviceService } from '../../pusherservice.service';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-ordenes-rechazadas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  animations: fadeInOutAnimations,
  templateUrl: './ordenes-rechazadas.component.html',
  styleUrl: './ordenes-rechazadas.component.scss'
})
export class OrdenesRechazadasComponent implements OnInit {
  orders: Ordenes[] = []
  status:string = 'cancelada'
  cargando: boolean = true;
  constructor(private orderservice: OrderService,  private router: Router, private pusherservice:PusherserviceService){

  }
  ngOnInit(){
      this.getOrderByStatus(this.status)
      this.pusherservice.subscribeToGeneroUpdatedEvent((data) => {
        this.getOrderByStatus(this.status);
      });
  }

  getOrderByStatus(status:string){
    this.orderservice.viewOrdersByStatus(status).subscribe(
      (orders: Ordenes[])=> {
        this.orders = orders
        this.cargando = false; 
        console.log(orders)
      },
      (erorr) => {
        console.error(erorr)
      }
  
  )
  }
  getProductQuantity(order: Ordenes, productId: number): number {
    const orderDetail = order.detalles.find(detail => detail.product_id === productId);
    return orderDetail ? orderDetail.quantity : 0;
  }

}
