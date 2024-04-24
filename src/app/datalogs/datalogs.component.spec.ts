import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalogsComponent } from './datalogs.component';

describe('DatalogsComponent', () => {
  let component: DatalogsComponent;
  let fixture: ComponentFixture<DatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatalogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
