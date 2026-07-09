export type Transaction = {
  id: string;
  userId: string;
  userName: string;
  description: string;
  amount: number;
  type: string;
  createdAt: string;
};

export type TransactionReport = {
  userId: string;
  username: string;
  revenue: number;
  expenses: number;
  balance: number;
};

export type ReportTotal = {
  totalRevenue: number;
  totalExpenses: number;
  totalBalance: number;
};
