import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../interfaces/cart-item';
import { OrderService } from '../ordenes/order.service';
import { ProductList } from '../interfaces/product-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: CartItem[] = [];
  Sendemail: boolean = false;
  clientEmail: string = '';
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router:Router,
  ) {
    this.cart = this.cartService.getCart();
  }

  addToCart(product: ProductList, cantidad: number): void {
    this.cartService.addToCart(product, cantidad);
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
    const total = this.getTotal();
    const order = {
      items: this.cart.map(item => ({ product_id: item.product.id, quantity: item.quantity })),
      total: total
    };
  
    console.log(order);
    this.orderService.createOrder(order)
      .subscribe(
        () => {
          if (this.Sendemail) {
            this.sendsend(order); //correoop
          }
          this.cartService.clearCart();
          this.cart = [];
          alert('Orden realizada con éxito');
        },
        error => {
          alert('Error al realizar la orden');
          console.error(error);
        }
      );
  }

  decreaseQuantity(index: number): void {
    this.cartService.decreaseQuantity(index);
    this.cart = this.cartService.getCart();
  }

  increaseQuantity(index: number): void {
    this.cartService.increaseQuantity(index);
    this.cart = this.cartService.getCart();
  }
  
  onDownloadChange(event: any): void {
    this.Sendemail = event.target.checked;
    if (!event.target.checked) {
      this.clientEmail = ''; // Reset email input if checkbox is unchecked
    }
  }
  sendsend(order: any): void{
    const orderWithEmail = {
      ...order,
      clientEmail: this.clientEmail
    };
    console.log(orderWithEmail);
    this.orderService.sendClientEmail(orderWithEmail)
      .subscribe(
        () => {
          console.log("Nice");
          this.Sendemail = false; // Reset the flag
          this.clientEmail = '';
        },
        error => {
          alert('Error al realizar la orden'),
          console.error(error);
        }
      );
  }
}