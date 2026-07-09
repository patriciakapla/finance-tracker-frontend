import Table from "../../../../components/Table";
import TableHeader from "../../../../components/TableHeader";
import TableData from "../../../../components/TableData";
import { useTransactionReportQuery } from "../../hooks/useTransactionReportQuery";
import { formatNumber } from "../../../../utils/formatNumber";

function TransactionsReportTable() {
  const { data: transactions, isLoading } = useTransactionReportQuery();

  if (isLoading) {
    return <span>Carregando...</span>;
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHeader>Usuário</TableHeader>
            <TableHeader>Receitas</TableHeader>
            <TableHeader>Despesas</TableHeader>
            <TableHeader>Saldo</TableHeader>
          </tr>
        </thead>
        <tbody>
          {transactions?.data.map((transaction) => {
            return (
              <tr key={transaction.userId}>
                <TableData>{transaction.username}</TableData>
                <TableData>{formatNumber(transaction.revenue)}</TableData>
                <TableData>{formatNumber(transaction.expenses)}</TableData>
                <TableData>{formatNumber(transaction.balance)}</TableData>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionsReportTable;
