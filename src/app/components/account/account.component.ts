import { Component, OnInit } from '@angular/core';

import { IAccount } from '../../types/i-accounts';
import { MockDataService } from '../../services/mock-data/mock-data.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MockDataService],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  public accountColumns: string[] = ['Id', 'Limit', 'Products', 'Details'];
  public accountData: IAccount[] = [];

  constructor(private _dataService: MockDataService) {}

    ngOnInit(): void {
      this.accountData = [];
      this.fetchAccountData();
    }
  

    private fetchAccountData() {
    this._dataService.getAccounts().subscribe(accounts => {
      this.accountData = accounts;
    })
  }
}
