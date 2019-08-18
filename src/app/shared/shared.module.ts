import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorMessageComponent } from './common-component/form-control-error-message/form-control-error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { throwIfAlreadyLoaded } from './module-imports.guards';
import { NumericOnlyDirective } from './directive/numeric-only.directive';



@NgModule({
  declarations: [
    FormControlErrorMessageComponent,
    NumericOnlyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlErrorMessageComponent,
    NumericOnlyDirective
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    throwIfAlreadyLoaded(parentModule, 'SharedModule');
  }
}
