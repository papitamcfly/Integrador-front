import { Injectable } from '@angular/core';
import { ProductList } from '../interfaces/product-list';
import { CartItem } from '../interfaces/cart-item';
@Injectable({
  providedIn: 'root'
})
export class CartService  {
  private cart: CartItem[] = [];

  addToCart(product: ProductList,cantidad:number): void {
    const existingCartItem = this.cart.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += cantidad
    } else {
      const cartItem: CartItem = {
        product: product,
        quantity: cantidad
      };
      this.cart.push(cartItem);
    }
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  clearCart(): void {
    this.cart = [];
  }
}