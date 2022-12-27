import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accounts } from '../Model/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAccountByNumber(accountNumber: string) : Observable<Accounts> {
    return this.http.get<Accounts>(`${this.baseURL}/accounts/${accountNumber}`)
  }
}
