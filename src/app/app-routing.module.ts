import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren:'./component/whoami/whoami.module#WhoamiModule'},
  {path:'about', loadChildren: './component/about/about.module#AboutModule'},
  {path:'formSamples', loadChildren: './component/form-example-with-error-message/form-example-with-error-message.module#FormExampleWithErrorMessageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
