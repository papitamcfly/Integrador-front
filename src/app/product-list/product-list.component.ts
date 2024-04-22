import { Component,OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { ProductList } from '../interfaces/product-list';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: ProductList[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('activo')
      .subscribe(products => this.products = products);
  }

  addToCart(product: ProductList,cantidad:string): void {
    const cantidadparsed = parseInt(cantidad, 10)
    this.cartService.addToCart(product,cantidadparsed);
  }
}

