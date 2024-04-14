import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTerminadasComponent } from './ordenes-terminadas.component';

describe('OrdenesTerminadasComponent', () => {
  let component: OrdenesTerminadasComponent;
  let fixture: ComponentFixture<OrdenesTerminadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesTerminadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenesTerminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
