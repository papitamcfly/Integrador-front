import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service'
import {Data} from '../interfaces/data'

@Component({
  selector: 'app-datalogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datalogs.component.html',
  styleUrl: './datalogs.component.css'
})
export class DatalogsComponent implements OnInit {
  Data: Data[] = [];

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getLogs().subscribe(
      (data) => {
        console.log('Datos recibidos:', data); // Verifica los datos recibidos en la consola
        this.Data = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
 