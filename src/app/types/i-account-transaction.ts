import { ITransaction } from "./i-transaction";

export interface IAccountTransaction {
    account_id: number;
    transaction_count: number;
    transactions: ITransaction[]
  }
  