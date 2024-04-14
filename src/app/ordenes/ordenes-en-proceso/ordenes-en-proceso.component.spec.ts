import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesEnProcesoComponent } from './ordenes-en-proceso.component';

describe('OrdenesEnProcesoComponent', () => {
  let component: OrdenesEnProcesoComponent;
  let fixture: ComponentFixture<OrdenesEnProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesEnProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenesEnProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
