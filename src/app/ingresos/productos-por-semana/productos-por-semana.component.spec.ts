import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorSemanaComponent } from './productos-por-semana.component';

describe('ProductosPorSemanaComponent', () => {
  let component: ProductosPorSemanaComponent;
  let fixture: ComponentFixture<ProductosPorSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPorSemanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosPorSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
