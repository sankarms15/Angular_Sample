import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleWithErrorMessageComponent } from './form-example-with-error-message.component';

describe('FormExampleWithErrorMessageComponent', () => {
  let component: FormExampleWithErrorMessageComponent;
  let fixture: ComponentFixture<FormExampleWithErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExampleWithErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleWithErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
