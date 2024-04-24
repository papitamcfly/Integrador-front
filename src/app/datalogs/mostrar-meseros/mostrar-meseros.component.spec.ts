import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMeserosComponent } from './mostrar-meseros.component';

describe('MostrarMeserosComponent', () => {
  let component: MostrarMeserosComponent;
  let fixture: ComponentFixture<MostrarMeserosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarMeserosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarMeserosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
