import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorDiaComponent } from './productos-por-dia.component';

describe('ProductosPorDiaComponent', () => {
  let component: ProductosPorDiaComponent;
  let fixture: ComponentFixture<ProductosPorDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPorDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosPorDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
