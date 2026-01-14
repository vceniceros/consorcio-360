export enum SpendStatus {
  PAID = 'PAID',
  PENDING = 'PENDING'
}

export interface Spend {
  id: number;
  date: string;
  category: string;
  description: string;
  provider: string;
  amount: number;
  status: SpendStatus;
}
