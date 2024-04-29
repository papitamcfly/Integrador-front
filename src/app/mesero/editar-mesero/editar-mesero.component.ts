import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MeseroService } from '../mesero.service';
import { Mesero } from '../../interfaces/mesero';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-editar-mesero',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './editar-mesero.component.html',
  styleUrls: ['./editar-mesero.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EditarMeseroComponent implements OnInit {
  meseroForm!: FormGroup;
  id!: number;
  Nombre: string = '';
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private meseroService: MeseroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.meseroForm = this.formBuilder.group({
      Nombre: ['', Validators.required]
    });

    
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(      this.id = +params['id']
    )
      this.meseroForm.patchValue({
        Nombre: params['Nombre']
      });
    });
    this.buscarMesero();
  }

  actualizarMesero() {
    this.isLoading = true;
    if (this.meseroForm.valid) {
      this.meseroService.actualizarMesero(this.id, this.meseroForm.value).subscribe(
        response => {
          console.log('Mesero actualizado con éxito', response);
          alert('Información actualizada con éxito');
          this.isLoading = false;
          this.router.navigate(['/meseros']);
        },
        error => {
          console.error('Error al actualizar el mesero:', error);
          alert('Error al actualizar el mesero');
        }  
      );
      }
  }

  buscarMesero() {
    this.meseroService.buscarmesero(this.id).subscribe({
      next: (mesero) => {
        this.Nombre = mesero.Nombre; 
        this.meseroForm.patchValue({ Nombre: mesero.Nombre });
 
      },
      error: (error) => {
        console.error('Error al buscar el mesero:', error);
        alert('Error al buscar el mesero');
      }
    });
  }
}
