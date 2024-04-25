import { Component, OnInit } from '@angular/core';
import { Mesero } from '../../interfaces/mesero';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-meseros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-meseros.component.html',
  styleUrl: './mostrar-meseros.component.scss'
})
export class MostrarMeserosComponent implements OnInit {
  robots: Mesero[] = [];

  constructor(private router: Router, private robotService: DataService) { }

  ngOnInit(): void {
    this.getRobots();
  }

  getRobots(): void {
    this.robotService.getRobots().subscribe(
      (robots: Mesero[]) => {
        this.robots = robots;
      },
      (error: any) => {
        console.error('Error al obtener los robots:', error);
      }
    );
  }

  agregarRobot(): void {
    this.router.navigate(['/logsrecientes']);
  }

  navigateToRobotDetail(robotId: number): void {
    this.router.navigate(['/logsrecientes', robotId]);
  }
  editRobot(robotId: number): void {
    this.router.navigate(['/logsrecientes', robotId]);
  }
  eliminateRobot(robotId: number): void {
    this.router.navigate(['/logsrecientes', robotId]);
  }
}