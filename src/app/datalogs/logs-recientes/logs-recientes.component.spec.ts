import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsRecientesComponent } from './logs-recientes.component';

describe('LogsRecientesComponent', () => {
  let component: LogsRecientesComponent;
  let fixture: ComponentFixture<LogsRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsRecientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogsRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
