import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorMesComponent } from './ingresos-por-mes.component';

describe('IngresosPorMesComponent', () => {
  let component: IngresosPorMesComponent;
  let fixture: ComponentFixture<IngresosPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresosPorMesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresosPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
