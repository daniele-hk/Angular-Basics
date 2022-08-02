import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertComponent } from './SuccessAlert.component';

describe('SuccesAlertComponent', () => {
  let component: SuccessAlertComponent;
  let fixture: ComponentFixture<SuccessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
