import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:UserLoginComponent},
  {path:'registration', component:UserRegistrationComponent},
  {path:'user-dashboard', component:UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
