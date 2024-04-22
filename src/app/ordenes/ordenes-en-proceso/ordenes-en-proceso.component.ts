import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Ordenes } from '../../interfaces/ordenes';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PusherserviceService } from '../../pusherservice.service';

@Component({
  selector: 'app-ordenes-en-proceso',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ordenes-en-proceso.component.html',
  styleUrl: './ordenes-en-proceso.component.scss'
})
export class OrdenesEnProcesoComponent {
  orders: Ordenes[] = []
  status:string = 'preparando'
  constructor(private orderservice: OrderService,  private router: Router, private pusherService:PusherserviceService){

  }
  ngOnInit(){
      this.getOrderByStatus(this.status)
      this.pusherService.subscribeToGeneroUpdatedEvent((data) => {
        this.getOrderByStatus(this.status);
      });
  }

  getOrderByStatus(status:string){
    this.orderservice.viewOrdersByStatus(status).subscribe(
      (orders: Ordenes[])=> {
        this.orders = orders
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
  changestatus(id:number,orders:Ordenes)
  {

      let estado: string = "entregada"
      this.orderservice.changestatus(id, estado,orders).subscribe(
        response=>{
          console.log('genero editado con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/ordenes']);
        },
        error => console.error('Error al crear el genero:', error)
      );
    }
}
