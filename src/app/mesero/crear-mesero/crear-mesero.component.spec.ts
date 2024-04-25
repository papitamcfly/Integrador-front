import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMeseroComponent } from './crear-mesero.component';

describe('CrearMeseroComponent', () => {
  let component: CrearMeseroComponent;
  let fixture: ComponentFixture<CrearMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMeseroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
