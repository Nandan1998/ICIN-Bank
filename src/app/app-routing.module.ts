import { UserTransfersComponent } from './Components/user-transfers/user-transfers.component';
import { UserTransactionsComponent } from './Components/user-transactions/user-transactions.component';
import { UserChequeBookComponent } from './Components/user-cheque-book/user-cheque-book.component';
import { UserAccountsComponent } from './Components/user-accounts/user-accounts.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

const routes: Routes = [
  {path:'', component:UserLoginComponent},
  {path:'registration', component:UserRegistrationComponent},
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'user-accounts', component:UserAccountsComponent},
  {path:'user-profile', component:UserProfileComponent},
  {path:'user-cheque', component:UserChequeBookComponent},
  {path:'user-passbook', component:UserTransactionsComponent},
  {path:'user-transfer',component:UserTransfersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
