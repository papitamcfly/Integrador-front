import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCart().subscribe(
      (items: any[]) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error fetching cart items', error);
      }
    );
  }

  removeFromCart(itemId: string): void {
    this.cartService.removeFromCart(itemId).subscribe(
      () => {
        this.getCartItems();
      },
      (error) => {
        console.error('Error removing item from cart', error);
      }
    );
  }

  updateQuantity(itemId: string, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity).subscribe(
      () => {
        this.getCartItems();
      },
      (error) => {
        console.error('Error updating item quantity', error);
      }
    );
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(
      () => {
        this.getCartItems();
      },
      (error) => {
        console.error('Error clearing cart', error);
      }
    );
  }
}
