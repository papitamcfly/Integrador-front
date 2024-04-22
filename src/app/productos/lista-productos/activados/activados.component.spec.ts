import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivadosComponent } from './activados.component';

describe('ActivadosComponent', () => {
  let component: ActivadosComponent;
  let fixture: ComponentFixture<ActivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
