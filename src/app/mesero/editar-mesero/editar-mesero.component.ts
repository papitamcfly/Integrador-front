import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MeseroService } from '../mesero.service';

@Component({
  selector: 'app-editar-mesero',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './editar-mesero.component.html',
  styleUrls: ['./editar-mesero.component.scss']
})
export class EditarMeseroComponent implements OnInit {
  meseroForm!: FormGroup;
  id!: number;
  nombre: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private meseroService: MeseroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.meseroForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });

    
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(      this.id = +params['id']
    )
      this.meseroForm.patchValue({
        nombre: params['Nombre']
      });
    });
    this.buscarMesero();
  }

  actualizarMesero() {
    if (this.meseroForm.valid) {
      const nombre = this.meseroForm.get('nombre')?.value;
      this.meseroService.actualizarMesero(this.id, nombre).subscribe({
        next: () => {
          console.log('Mesero actualizado exitosamente');
          alert('Mesero actualizado exitosamente!');
          this.router.navigate(['/meseros']);
        },
        error: (error) => {
          console.error('Error al actualizar el mesero:', error);
          alert('Error al actualizar el mesero');
        }
      });
    }
  }

  buscarMesero() {
    this.meseroService.buscarmesero(this.id).subscribe({
      next: (mesero) => {
        this.nombre = mesero.Nombre; 
        this.meseroForm.patchValue({ nombre: mesero.Nombre });
 
      },
      error: (error) => {
        console.error('Error al buscar el mesero:', error);
        alert('Error al buscar el mesero');
      }
    });
  }

}
