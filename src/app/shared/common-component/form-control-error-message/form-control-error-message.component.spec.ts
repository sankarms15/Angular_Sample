import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlErrorMessageComponent } from './form-control-error-message.component';

describe('FormControlErrorMessageComponent', () => {
  let component: FormControlErrorMessageComponent;
  let fixture: ComponentFixture<FormControlErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
