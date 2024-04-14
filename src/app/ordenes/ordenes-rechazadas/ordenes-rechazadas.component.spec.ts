import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesRechazadasComponent } from './ordenes-rechazadas.component';

describe('OrdenesRechazadasComponent', () => {
  let component: OrdenesRechazadasComponent;
  let fixture: ComponentFixture<OrdenesRechazadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesRechazadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenesRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
