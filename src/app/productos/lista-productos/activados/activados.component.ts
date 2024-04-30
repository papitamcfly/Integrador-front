import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../../interfaces/product-list';
import { ProductService } from '../../../product-list/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimations } from '../../../animations';

@Component({
  selector: 'app-activados',
  standalone: true,
  imports: [CommonModule,RouterModule],
  animations: fadeInOutAnimations,
  templateUrl: './activados.component.html',
  styleUrl: './activados.component.css'
})
export class ActivadosComponent implements OnInit {
  products: ProductList[] = [];
  cargando: boolean = true;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('activo')
      .subscribe(products => {this.products = products, this.cargando = false });
  }
  changestatus(id: number): void {
    if (confirm('¿Estás seguro de desactivar este producto?')) {
      this.productService.changestatus(id,'inactivo')
        .subscribe(() => {
          this.products = this.products.filter(product => product.id !== id);
        });
    }
  }
}
