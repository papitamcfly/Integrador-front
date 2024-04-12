import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CartItem } from '../interfaces/cart-item';
import { OrderService } from './order.service';
import { ProductList } from '../interfaces/product-list';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent{
  cart: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.cart = this.cartService.getCart();
  }

  addToCart(product: ProductList,cantidad:number): void {
    this.cartService.addToCart(product,cantidad);
    this.cart = this.cartService.getCart();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cart = this.cartService.getCart();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  placeOrder(): void {
    const order = {
      items: this.cart.map(item => ({
        product_id: item.product.id,
        quantity: item.quantity
      }))
    };

    this.orderService.createOrder(order)
      .subscribe(
        () => {
          this.cartService.clearCart();
          this.cart = [];
          alert('Orden realizada con éxito');
        },
        error => {alert('Error al realizar la orden'),
        console.error(error);}
      );
  }
}
