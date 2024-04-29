import { Component, OnInit } from '@angular/core';
import { Mesero } from '../../interfaces/mesero';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';

@Component({
  selector: 'app-mostrar-meseros',
  standalone: true,
  imports: [CommonModule],
  animations: fadeInOutAnimations,
  templateUrl: './mostrar-meseros.component.html',
  styleUrl: './mostrar-meseros.component.scss'
})
export class MostrarMeserosComponent implements OnInit {
  robots: Mesero[] = [];
  cargando: boolean = true;

  constructor(private router: Router, private robotService: DataService) { }

  ngOnInit(): void {
    this.getRobots();
  }

  getRobots(): void {
    this.robotService.getRobots().subscribe(
      (robots: Mesero[]) => {
        this.robots = robots;
        this.cargando = false; 
      },
      (error: any) => {
        console.error('Error al obtener los robots:', error);
      }
    );
  }

  agregarRobot(): void {
    this.router.navigate(['/meseros/create']);
  }

  navigateToRobotDetail(robotId: number): void {
    this.router.navigate(['/logsrecientes', robotId]);
  }
  editRobot(robotId: number): void {
    this.router.navigate(['/meseros/editar', robotId]);
  }
  eliminateRobot(robotId: number): void {
    const confirmEliminar = confirm('¿Estás seguro de que deseas eliminar este robot?');
    if (confirmEliminar){
      this.robotService.borrarRobot(robotId).subscribe(
        (response)=>{
          alert('Mesero eliminado exitosamente.');
          this.reloadPage();
        },
        (error)=>{
          console.log(error);
        }
      )
    };
  }
  reloadPage(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/meseros']);
    });
  }
}