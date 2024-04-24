import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Mesero } from '../../interfaces/mesero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-robot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-robot.component.html',
  styleUrl: './select-robot.component.css'
})
export class SelectRobotComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {}


  robots: Mesero[] = [];

  ngOnInit() {
    this.dataService.getRobots().subscribe(
      (robots: Mesero[]) => {
        this.robots = robots;
      },
      (error) => {
        console.error('Error al cargar los robots', error);
      }
    );
  }

  verDetalles(robotId: number) {
    this.router.navigate(['/logsrecientes/', robotId]);
  }
}
