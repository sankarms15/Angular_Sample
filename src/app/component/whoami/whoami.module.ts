import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WhoamiComponent } from './whoami/whoami.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:WhoamiComponent}
    ])
  ],
  declarations: [WhoamiComponent]
})
export class WhoamiModule { }
