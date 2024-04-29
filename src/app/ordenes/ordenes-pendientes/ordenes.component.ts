import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Ordenes } from '../../interfaces/ordenes';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PusherserviceService } from '../../pusherservice.service';
import { fadeInOutAnimations } from '../../animations';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  animations: fadeInOutAnimations,
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.scss'
})
export class OrdenesComponent implements OnInit {
  orders: Ordenes[] = []
  status:string = 'pendiente'
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
  changestatus(id:number,estado:string,orders:Ordenes)
  {

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

