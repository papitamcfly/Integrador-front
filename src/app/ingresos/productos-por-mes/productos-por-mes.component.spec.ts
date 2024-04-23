import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorMesComponent } from './productos-por-mes.component';

describe('ProductosPorMesComponent', () => {
  let component: ProductosPorMesComponent;
  let fixture: ComponentFixture<ProductosPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPorMesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
