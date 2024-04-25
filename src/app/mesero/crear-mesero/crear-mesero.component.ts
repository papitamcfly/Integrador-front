import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';  // Make sure RouterModule is imported if you're using RouterLink or similar directives
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MeseroService } from '../mesero.service';

@Component({
  selector: 'app-crear-mesero',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,  // Add CommonModule here
    RouterModule  // Include this if you need routing directives like routerLink
  ],
  templateUrl: './crear-mesero.component.html',
  styleUrls: ['./crear-mesero.component.scss']
})
export class CrearMeseroComponent implements OnInit {
  meseroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private meseroService: MeseroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.meseroForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
  }

  crearMesero() {
    if (this.meseroForm.valid) {
      const nombre = this.meseroForm.get('nombre')?.value;
      this.meseroService.crearMesero(nombre).subscribe({
        next: (mesero) => {
          console.log('Mesero creado:', mesero);
          alert('Mesero creado exitosamente!');
          this.router.navigate(['/meseros']);
        },
        error: (error) => {
          console.error('Error al crear el mesero:', error);
          alert('Error al crear el mesero');
        }
      });
    }
  }
}
