import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service'
import { Data } from '../interfaces/data'
import { interval, Subscription } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { fadeInOutAnimations } from '../animations';

@Component({
  selector: 'app-datalogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: fadeInOutAnimations,
  templateUrl: './datalogs.component.html',
  styleUrls: ['./datalogs.component.css']
})
export class DatalogsComponent implements OnInit, OnDestroy {
  Data: Data[] = [];
  filterValue: string = '';
  cargando: boolean = true;
  private pollingSubscription: Subscription | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.startPolling();
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }

  get filteredData(): Data[] {
    return this.filterValue ? this.Data.filter(log => log.identificador.includes(this.filterValue)) : this.Data;
  }

  startPolling(): void {
    this.pollingSubscription = interval(5000)
      .pipe(
        switchMap(() => this.dataService.getLogs())
      )
      .subscribe(
        (data: Data[]) => {
          console.log('datos actualizados');
          console.log('Formato de horafecha:', data[0].horafecha);
          // Ordenar los datos de forma descendente según la propiedad horafecha
          const sortedData = data.sort((a, b) => {
            return new Date(b.horafecha).getTime() - new Date(a.horafecha).getTime();
          });
          this.Data = sortedData.map((item: Data) => ({
            ...item,
            fecha: this.formatDate(item.horafecha)
          }));
          this.cargando = false;
        },
        (error: any) => {
          console.error('Error al obtener los datos:', error);
        }
      );
  }

  stopPolling(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  formatDate(horafecha: string): string {
    const [tiempo, fecha] = horafecha.split(' ');
    const [hora, minutos, segundos] = tiempo.split(':');
    const [anio, mes, dia] = fecha.split('/');
  
    return `${hora}:${minutos}:${segundos} ${anio}-${mes}-${dia}`;
  }
}