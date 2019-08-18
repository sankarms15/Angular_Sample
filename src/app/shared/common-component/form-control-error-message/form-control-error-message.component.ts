import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, value: any) {
    const config = {
      'required': 'This feid is required',
      'email': 'Enter valid email address e.g: abc@gmail.com',
      'pattern': 'the format of phone number is not correct',
      'maxlength': 'Maximum length not greater than 10'
    };

    return config[validatorName];
  }
}

@Component({
  selector: 'app-form-control-error-message',
  templateUrl: './form-control-error-message.component.html',
  styleUrls: ['./form-control-error-message.component.scss']
})
export class FormControlErrorMessageComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
        console.log(propertyName);
        console.log(this.control.errors);
        console.log(ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]));
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
