import TransactionsReportTable from "../features/transactions/components/TransactionsReportTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import TotalView from "../components/TotalView";

function Report() {
  return (
    <>
      <DataView>
        <div className="mb-5">
          <PageTitle>RELATÓRIO DE TRANSAÇÕES</PageTitle>
        </div>
        <div className="flex flex-col gap-8">
          <TransactionsReportTable />
          <TotalView></TotalView>
        </div>
      </DataView>
    </>
  );
}

export default Report;
