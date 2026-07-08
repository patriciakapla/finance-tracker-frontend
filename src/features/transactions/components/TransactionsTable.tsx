import TableHeader from "../../../components/TableHeader";
import TableData from "../../../components/TableData";
import Table from "../../../components/Table";
import { useTransactionQuery } from "../hooks/useTransactionQuery";
import { formatDate } from "../../../utils/formatDate";
import { formatNumber } from "../../../utils/formatNumber";

function TransactionsTable() {
  const { data: transactions, isLoading } = useTransactionQuery();

  if (isLoading) {
    return <span>Carregando...</span>;
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHeader>Usuário</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Descrição</TableHeader>
            <TableHeader>Receita</TableHeader>
            <TableHeader>Despesa</TableHeader>
          </tr>
        </thead>
        <tbody>
          {transactions?.data.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <TableData>{transaction.userName}</TableData>
                <TableData>{formatDate(transaction.createdAt)}</TableData>
                <TableData>{transaction.description}</TableData>
                <TableData>
                  {transaction.type === "revenue"
                    ? formatNumber(transaction.amount)
                    : "-"}
                </TableData>
                <TableData>
                  {transaction.type === "expense"
                    ? formatNumber(transaction.amount)
                    : "-"}
                </TableData>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionsTable;
