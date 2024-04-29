import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../interfaces/cart-item';
import { OrderService } from '../ordenes/order.service';
import { ProductList } from '../interfaces/product-list';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CartComponent implements OnInit, OnDestroy {
  cart: CartItem[] = [];
  Sendemail: boolean = false;
  clientEmail: string = '';
  isLoading = false;
  private subscription: Subscription | null = null;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit() {
    if (!this.subscription) {
      this.subscription = this.messageService.getMessage().subscribe(message => {
        if (message === 'cart_updated') {
          this.updateCart();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart(product: ProductList, cantidad: number): void {
    this.cartService.addToCart(product, cantidad);
    this.updateCart();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.updateCart();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  placeOrder(): void {
    this.isLoading = true;
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
            this.sendsend(order);
          }
          this.cartService.clearCart();
          this.cart = [];
          this.isLoading = false;
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
    this.updateCart();
  }

  increaseQuantity(index: number): void {
    this.cartService.increaseQuantity(index);
    this.updateCart();
  }

  onDownloadChange(event: any): void {
    this.Sendemail = event.target.checked;
    if (!event.target.checked) {
      this.clientEmail = '';
    }
  }

  sendsend(order: any): void {
    const orderWithEmail = { ...order, clientEmail: this.clientEmail };
    console.log(orderWithEmail);
    this.orderService.sendClientEmail(orderWithEmail)
      .subscribe(
        () => {
          console.log("Nice");
          this.Sendemail = false;
          this.clientEmail = '';
        },
        error => {
          alert('Error al realizar la orden'), console.error(error);
        }
      );
  }
}