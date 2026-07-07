import Table from "../../../components/Table";
import TableHeader from "../../../components/TableHeader";
import TableData from "../../../components/TableData";

function TransactionsReportTable() {
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
          <tr>
            <TableData>Buffy</TableData>
            <TableData>1.200,00</TableData>
            <TableData>800</TableData>
            <TableData>400,00</TableData>
          </tr>
          <tr>
            <TableData>Rupert</TableData>
            <TableData>600,00</TableData>
            <TableData>55,90</TableData>
            <TableData>144,10</TableData>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionsReportTable;
