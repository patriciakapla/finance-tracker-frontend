import TableHeader from "../../../components/TableHeader";
import TableData from "../../../components/TableData";
import Table from "../../../components/Table";

function TransactionsTable() {
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
          <tr>
            <TableData>Buffy</TableData>
            <TableData>17/05/2026</TableData>
            <TableData>Caça de vampiro</TableData>
            <TableData>1200,00</TableData>
            <TableData>-</TableData>
          </tr>
          <tr>
            <TableData>Rupert</TableData>
            <TableData>21/05/2026</TableData>
            <TableData>Equipamento para matar vampiros</TableData>
            <TableData>-</TableData>
            <TableData>55,90</TableData>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionsTable;
