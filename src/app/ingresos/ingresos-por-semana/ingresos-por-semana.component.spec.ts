import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorSemanaComponent } from './ingresos-por-semana.component';

describe('IngresosPorSemanaComponent', () => {
  let component: IngresosPorSemanaComponent;
  let fixture: ComponentFixture<IngresosPorSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresosPorSemanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresosPorSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
