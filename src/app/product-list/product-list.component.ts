import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { ProductList } from '../interfaces/product-list';
import { CartComponent } from '../cart/cart.component';
import { MessageService } from '../message.service';
import { fadeInOutAnimations } from '../animations';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CartComponent],
  animations: fadeInOutAnimations,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductList[] = [];
  cargando: boolean = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('activo')
      .subscribe(products => {this.products = products, this.cargando = false; });
  }

  addToCart(product: ProductList, cantidad: string): void {
    const cantidadparsed = parseInt(cantidad, 10)
    this.cartService.addToCart(product, cantidadparsed);
    this.messageService.sendMessage('cart_updated');
  }
}