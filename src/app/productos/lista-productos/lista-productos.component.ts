import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-list/product.service';
import { ProductList } from '../../interfaces/product-list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DesactivadosComponent } from './desactivados/desactivados.component';
import { ActivadosComponent } from './activados/activados.component';
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule,RouterModule,DesactivadosComponent,ActivadosComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent{
  constructor(private router: Router) { }


  showComponent:string = 'activos'
  agregarProducto(): void {
    this.router.navigate(['/productos/store']);
  }
}