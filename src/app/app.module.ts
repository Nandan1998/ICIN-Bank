import { UserAccountsComponent } from './Components/user-accounts/user-accounts.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserChequeBookComponent } from './Components/user-cheque-book/user-cheque-book.component';
import { UserTransactionsComponent } from './Components/user-transactions/user-transactions.component';
import { UserTransfersComponent } from './Components/user-transfers/user-transfers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserDashboardComponent,
    UserAccountsComponent,
    UserProfileComponent,
    UserChequeBookComponent,
    UserTransactionsComponent,
    UserTransfersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
