import { Message } from './../Model/message';
import { Accounts } from './../Model/accounts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Model/users';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAccountByNumber(accountNumber: string) : Observable<Accounts> {
    return this.http.get<Accounts>(`${this.baseURL}/accounts/${accountNumber}`)
  }
  getAllAccounts():Observable<Array<Users>>{
    return this.http.get<Array<Users>>(`${this.baseURL}/accounts`); 
  }
  createAccount(account:Accounts): Observable<Message>{
    return this.http.post<Message>(`${this.baseURL}/accounts/add-account`,account);
  }
}
