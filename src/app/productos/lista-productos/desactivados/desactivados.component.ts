import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../../interfaces/product-list';
import { ProductService } from '../../../product-list/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeInOutAnimations } from '../../../animations';

@Component({
  selector: 'app-desactivados',
  standalone: true,
  imports: [CommonModule,RouterModule],
  animations: fadeInOutAnimations,
  templateUrl: './desactivados.component.html',
  styleUrl: './desactivados.component.css'
})
export class DesactivadosComponent implements OnInit {
  products: ProductList[] = [];
  cargando: boolean = true;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts('inactivo')
      .subscribe(products => {this.products = products, this.cargando = false});
  }
  changestatus(id: number): void {
    if (confirm('¿Estás seguro de activar este producto?')) {
      this.productService.changestatus(id,'activo')
        .subscribe(() => {
          this.products = this.products.filter(product => product.id !== id);
        });
    }
  }
  deleteproduct(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.deleteProduct(id)
        .subscribe(() => {
          this.products = this.products.filter(product => product.id !== id);
        });
    }
  }
}
