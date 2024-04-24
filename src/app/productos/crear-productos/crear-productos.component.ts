import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { fadeInOutAnimations } from '../../animations';
import { ProductService } from '../../product-list/product.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crear-productos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.scss'
})
export class CrearProductosComponent implements OnInit {
  productStoreForm!: FormGroup;
  submitted = false;
  errors: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productStoreForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9]+$')]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      img: [null, [Validators.required, this.validarTipoArchivo]]
    });
  }

  get formControls() {
    return this.productStoreForm.controls;
  }


  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productStoreForm.get('img')?.setValue(file);
    } else {
      this.productStoreForm.get('img')?.setValue(null);
    }
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.productStoreForm.valid) {
      this.productService.createProduct(this.productStoreForm.value).subscribe(
        (response) => {
          console.log('Producto creado:', response);
          alert('Producto creado con éxito.');
          this.router.navigate(['/productos/index']);
        },
        (error) => {
          console.error('Error al crear el producto:', error);
          this.errors = error.error.errors || {};
        }
      );
    }
  }
  validarTipoArchivo: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value instanceof File) {
      const fileType = control.value.type;
      if (!fileType.match(/image\/(jpeg|png|gif)/)) {
        return { invalidFileType: true };
      }
    }
    return null;
  };
}
