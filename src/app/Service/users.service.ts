import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChequeBooks } from '../Model/cheque-books';
import { Message } from '../Model/message';
import { Users } from '../Model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<Array<Users>>{
      return this.http.get<Array<Users>>(`${this.baseURL}/users`); 
    }

  putUser(user: Users) : Observable<Message> {
    let targetURL = '/users/addUser'
    return this.http.post<Message>(this.baseURL+targetURL, user);
  }

  checkUserByIdAndPassword(loginUserId: string, loginUserPassword: string) : Observable<Message> {
    let targetURL = `/users/check/${loginUserId}/${loginUserPassword}`;
    return this.http.get<Message>(this.baseURL+targetURL);
  }

  getAllBlockedUser() : Observable<Array<Users>> {
    return this.http.get<Array<Users>>(`${this.baseURL}/users/blocked-users`);
  }

  blockUser(loginUserId: string) : Observable<Message> {
    return this.http.get<Message>(`${this.baseURL}/users/block/${loginUserId}`);
  }

  unblockUser(loginUserId: string) : Observable<Message> {
    return this.http.get<Message>(`${this.baseURL}/users/unblock/${loginUserId}`);
  }

  getUser(loginUserId: string) : Observable<Users> {
    return this.http.get<Users>(`${this.baseURL}/users/${loginUserId}`);
  }

  updateLoginPassword(newPassword: string, accountNumber: string) {
    return this.http.get<Message>(`${this.baseURL}/users/update/loginPassword/${newPassword}/${accountNumber}`)
  }

  updateTransactionPassword(newPassword: string, accountNumber: string) {
    return this.http.get<Message>(`${this.baseURL}/users/update/transactionPassword/${newPassword}/${accountNumber}`)
  }

  requestChequeBook(accountNumber: string, accountType: string) {
    return this.http.get<Message>(`${this.baseURL}/users/request-cheque-book/${accountNumber}/${accountType}`)
  }

  getChequeBooks(accountNumber: string) : Observable<Array<ChequeBooks>> {
    return this.http.get<Array<ChequeBooks>>(`${this.baseURL}/users/cheque-books/${accountNumber}`);
  }

  getAllChequeBookRequests() : Observable<Array<ChequeBooks>> {
    return this.http.get<Array<ChequeBooks>>(`${this.baseURL}/admin/cheque-books-requests`);
  }

  acceptChequeBookRequest(chequeBookNumber: string) : Observable<Message> {
    return this.http.get<Message>(`${this.baseURL}/admin/cheque-books-requests/accept/${chequeBookNumber}`);
  }
}
