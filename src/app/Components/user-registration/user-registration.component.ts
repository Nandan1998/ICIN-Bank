import { Router } from '@angular/router';
import { UsersService } from './../../Service/users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Model/users';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{

  firstName: string = '';
  lastName: string = '';
  accountNumber: string = '';
  loginUserID: string = '';
  loginUserPassword1: string = '';
  loginUserPassword2: string = '';

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  generateID() {
    if (this.firstName === '' ||
      this.lastName === '' ||
      this.accountNumber === '') {
      alert('Please Enter Above Credentials');
      return;
    }
    let temp = this.firstName+this.lastName+this.accountNumber;
    let result = [];
    for(let i = 0; i<8; i++) {
      result.push(temp.charAt(Math.floor(Math.random() * temp.length)));
    }
    this.loginUserID = result.join('');
  }

  register() {
    if (this.firstName === '' ||
      this.lastName === '' ||
      this.accountNumber === '' ||
      this.loginUserID === '' ||
      this.loginUserPassword1 === '' || this.loginUserPassword2 === '') {
      alert('Please enter the required details!');
      return;
    }

    if (!(this.loginUserPassword1 === this.loginUserPassword2)) {
      alert('Entered login passwords do not match!');
      return;
    }

    let user = {
      accountNumber: this.accountNumber,
      accountHolderName: this.firstName + ' ' + this.lastName,
      accountLoginUserId: this.loginUserID,
      accountLoginPassword: this.loginUserPassword1,
      accountIsBlocked: 0
    } as Users

    this.userService.putUser(user).subscribe(
      message => {
        if (message.message === 'Successfully registered!') {
          let mySuccessMessage = message.message + '\n' + 'Press OK to login and enjoy the services.'
          if (confirm(mySuccessMessage)) {
            this.router.navigate(['user-dashboard']);
          }
        } else {
          alert(message.message);
        }
      },
      error => console.log(error),
      () => {
        this.accountNumber = '';
        this.firstName = '';
        this.lastName = '';
        this.loginUserID = '';
        this.loginUserPassword1 = '';
        this.loginUserPassword2 = '';
      }
    )

  }

}
