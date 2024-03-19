import { Injectable } from '@angular/core';
import { IAccount } from '../../types/i-accounts';
import { IAccountTransaction } from '../../types/i-account-transaction';
import { Observable, of } from 'rxjs';
import { accounts } from '../../../../mock-data/accounts';
import { transactions } from '../../../../mock-data/transactions';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }


public getAccounts(): Observable<IAccount[]> {
  return of(accounts);
}

public getAccountTransactions(): Observable<IAccountTransaction[]> {
  return of(transactions);
}
}
