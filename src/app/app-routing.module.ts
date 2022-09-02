import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',


    //component:LoginformComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'register', component: RegisterformComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'home', component: HomepageComponent },
    ],
  },
  { path: 'login', component: LoginformComponent },

  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
