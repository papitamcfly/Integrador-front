import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {DataService} from './data.service'
import {Data} from '../interfaces/data'
import { interval, Subscription } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-datalogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datalogs.component.html',
  styleUrl: './datalogs.component.css'
})
export class DatalogsComponent implements OnInit, OnDestroy {
  Data: Data[] = [];
  private pollingSubscription: Subscription | null = null;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.startPolling(
    );
  }
  ngOnDestroy(): void {
    this.stopPolling();
  }
  startPolling(): void {
    this.pollingSubscription = interval(5000)
      .pipe(
        switchMap(() => this.dataService.getLogs())
      )
      .subscribe(
        (data: Data[]) => {
          console.log('datos actualizados')
          this.Data = data;
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
}
 