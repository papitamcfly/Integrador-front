import { Component, OnInit, OnDestroy } from '@angular/core';
import { Datos } from '../../interfaces/datos';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Sensores } from '../../interfaces/sensores';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fadeInOutAnimations } from '../../animations';

@Component({
  selector: 'app-logs-recientes',
  standalone: true,
  imports: [CommonModule],
  animations: fadeInOutAnimations,
  templateUrl: './logs-recientes.component.html',
  styleUrls: ['./logs-recientes.component.scss']
})
export class LogsRecientesComponent implements OnInit, OnDestroy {
  datos: Datos[] = [];
  sensores: Sensores[] = [];
  id: number = 0;
  cargando: boolean = true;
  private pollingSubscription: Subscription | null = null;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getSensores();
      this.startPolling();
    });
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }

  startPolling(): void {
    this.pollingSubscription = interval(5000)
      .pipe(
        switchMap(() => this.dataService.getLogsActuales(this.id))
      )
      .subscribe(
        (data: Datos[]) => {
          this.datos = data.map((item: Datos) => ({ ...item, fecha: this.formatDate(item.horafecha) }));
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

  getSensores(): void {
    this.dataService.getSensores().subscribe(
      (data: Sensores[]) => {
        this.sensores = data;
        this.cargando = false; 
      },
      (error: any) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  formatDate(horafecha: string): string {
    const [tiempo, fecha] = horafecha.split(' ');
    const [hora, minutos, segundos] = tiempo.split(':');
    const [anio, mes, dia] = fecha.split('-');
    return `${hora}:${minutos}:${segundos} ${anio}-${mes}-${dia}`;
  }
}