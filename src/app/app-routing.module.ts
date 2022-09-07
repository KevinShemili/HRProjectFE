import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './_components/change-password/change-password.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { LoginformComponent } from './_components/loginform/loginform.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { RegisterformComponent } from './_components/registerform/registerform.component';
import { AuthenticationGuard } from './_guards/authentication.guard';
import { PersonalComponent } from './_components/personal/personal.component';
import { ProfessionalComponent } from './_components/professional/professional.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'register', component: RegisterformComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'home', component: HomepageComponent },
    { path: 'personal', component: PersonalComponent },
    {path:'professional',component:ProfessionalComponent},
      
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
