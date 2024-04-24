import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRobotComponent } from './select-robot.component';

describe('SelectRobotComponent', () => {
  let component: SelectRobotComponent;
  let fixture: ComponentFixture<SelectRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRobotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
