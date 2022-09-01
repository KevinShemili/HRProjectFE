import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Edukimm1Component } from './edukimm1/edukimm1.component';


const routes: Routes = [
{
  path:'Profiliim',
component:Edukimm1Component

},
{
  path:'edukimm1',
  component:Edukimm1Component
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
