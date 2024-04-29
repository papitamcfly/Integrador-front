import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';  // Make sure RouterModule is imported if you're using RouterLink or similar directives
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MeseroService } from '../mesero.service';
import { Mesero } from '../../interfaces/mesero';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-crear-mesero',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,  // Add CommonModule here
    RouterModule  // Include this if you need routing directives like routerLink
  ],
  templateUrl: './crear-mesero.component.html',
  styleUrls: ['./crear-mesero.component.scss'],
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
export class CrearMeseroComponent implements OnInit {
  meseroForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private meseroService: MeseroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.meseroForm = this.formBuilder.group({
      Nombre: ['', Validators.required]
    });
  }

  crearMesero() {
    this.isLoading = true;
    if (this.meseroForm.valid) {
      console.log(this.meseroForm.value);
      this.meseroService.createMesero(this.meseroForm.value).subscribe(
        response => {
          console.log('Mesero creado:', response);
        alert('Mesero creado con exito.');
        this.isLoading = false;
        this.router.navigate(['/meseros']);
        },
        error => console.error('Error al crear el mesero:', error)
      );
    }
  }
}
