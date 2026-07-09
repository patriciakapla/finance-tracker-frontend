import TransactionsReportTable from "../features/transactions/components/report/TransactionsReportTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import ReportTotalView from "../features/transactions/components/report/ReportTotalView";

function Report() {
  return (
    <>
      <DataView>
        <div className="mb-5">
          <PageTitle>RELATÓRIO DE TRANSAÇÕES</PageTitle>
        </div>
        <div className="flex flex-col gap-8">
          <TransactionsReportTable />
          <ReportTotalView></ReportTotalView>
        </div>
      </DataView>
    </>
  );
}

export default Report;
