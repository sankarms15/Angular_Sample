import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example-with-error-message',
  templateUrl: './form-example-with-error-message.component.html',
  styleUrls: ['./form-example-with-error-message.component.scss']
})
export class FormExampleWithErrorMessageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(10)
      ]]
    });
  }

}
