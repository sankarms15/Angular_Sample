import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleWithErrorMessageComponent } from './form-example-with-error-message/form-example-with-error-message.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormExampleWithErrorMessageComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild([
      {path:'', component:FormExampleWithErrorMessageComponent}
    ])
  ]
})
export class FormExampleWithErrorMessageModule { }
